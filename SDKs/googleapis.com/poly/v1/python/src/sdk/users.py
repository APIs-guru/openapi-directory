import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Users:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def poly_users_assets_list(self, request: operations.PolyUsersAssetsListRequest) -> operations.PolyUsersAssetsListResponse:
        r"""Lists assets authored by the given user. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of PRIVATE or UNLISTED and assets which are All Rights Reserved for the currently-authenticated user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/assets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PolyUsersAssetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUserAssetsResponse])
                res.list_user_assets_response = out

        return res

    
    def poly_users_likedassets_list(self, request: operations.PolyUsersLikedassetsListRequest) -> operations.PolyUsersLikedassetsListResponse:
        r"""Lists assets that the user has liked. Only the value 'me', representing the currently-authenticated user, is supported. May include assets with an access level of UNLISTED.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/likedassets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PolyUsersLikedassetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLikedAssetsResponse])
                res.list_liked_assets_response = out

        return res

    