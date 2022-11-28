import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Blogs:
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

    
    def blogger_blogs_get(self, request: operations.BloggerBlogsGetRequest) -> operations.BloggerBlogsGetResponse:
        r"""Gets a blog by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerBlogsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Blog])
                res.blog = out

        return res

    
    def blogger_blogs_get_by_url(self, request: operations.BloggerBlogsGetByURLRequest) -> operations.BloggerBlogsGetByURLResponse:
        r"""Gets a blog by url.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v3/blogs/byurl"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerBlogsGetByURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Blog])
                res.blog = out

        return res

    
    def blogger_blogs_list_by_user(self, request: operations.BloggerBlogsListByUserRequest) -> operations.BloggerBlogsListByUserResponse:
        r"""Lists blogs by user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/users/{userId}/blogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerBlogsListByUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BlogList])
                res.blog_list = out

        return res

    