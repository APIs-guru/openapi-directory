import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Familysharing:
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

    
    def books_familysharing_get_family_info(self, request: operations.BooksFamilysharingGetFamilyInfoRequest) -> operations.BooksFamilysharingGetFamilyInfoResponse:
        r"""Gets information regarding the family that the user is part of.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/familysharing/getFamilyInfo"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksFamilysharingGetFamilyInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FamilyInfo])
                res.family_info = out

        return res

    
    def books_familysharing_share(self, request: operations.BooksFamilysharingShareRequest) -> operations.BooksFamilysharingShareResponse:
        r"""Initiates sharing of the content with the user's family. Empty response indicates success.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/familysharing/share"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksFamilysharingShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_familysharing_unshare(self, request: operations.BooksFamilysharingUnshareRequest) -> operations.BooksFamilysharingUnshareResponse:
        r"""Initiates revoking content that has already been shared with the user's family. Empty response indicates success.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/familysharing/unshare"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksFamilysharingUnshareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    