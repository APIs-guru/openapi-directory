import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Posts:
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

    
    def blogger_posts_get(self, request: operations.BloggerPostsGetRequest) -> operations.BloggerPostsGetResponse:
        r"""Gets a post by blog id and post id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/blogs/{blogId}/posts/{postId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPostsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Post])
                res.post = out

        return res

    
    def blogger_posts_list(self, request: operations.BloggerPostsListRequest) -> operations.BloggerPostsListResponse:
        r"""Lists posts.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2/blogs/{blogId}/posts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPostsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostList])
                res.post_list = out

        return res

    