import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Comments:
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

    
    def plus_comments_get(self, request: operations.PlusCommentsGetRequest) -> operations.PlusCommentsGetResponse:
        r"""Shut down. See https://developers.google.com/+/api-shutdown for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/comments/{commentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlusCommentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    
    def plus_comments_list(self, request: operations.PlusCommentsListRequest) -> operations.PlusCommentsListResponse:
        r"""Shut down. See https://developers.google.com/+/api-shutdown for more details.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/activities/{activityId}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlusCommentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentFeed])
                res.comment_feed = out

        return res

    