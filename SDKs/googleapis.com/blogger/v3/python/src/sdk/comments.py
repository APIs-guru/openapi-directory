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

    
    def blogger_comments_approve(self, request: operations.BloggerCommentsApproveRequest) -> operations.BloggerCommentsApproveResponse:
        r"""Marks a comment as not spam by blog id, post id and comment id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/approve", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsApproveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    
    def blogger_comments_delete(self, request: operations.BloggerCommentsDeleteRequest) -> operations.BloggerCommentsDeleteResponse:
        r"""Deletes a comment by blog id, post id and comment id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def blogger_comments_get(self, request: operations.BloggerCommentsGetRequest) -> operations.BloggerCommentsGetResponse:
        r"""Gets a comment by id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    
    def blogger_comments_list(self, request: operations.BloggerCommentsListRequest) -> operations.BloggerCommentsListResponse:
        r"""Lists comments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentList])
                res.comment_list = out

        return res

    
    def blogger_comments_list_by_blog(self, request: operations.BloggerCommentsListByBlogRequest) -> operations.BloggerCommentsListByBlogResponse:
        r"""Lists comments by blog.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/comments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsListByBlogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommentList])
                res.comment_list = out

        return res

    
    def blogger_comments_mark_as_spam(self, request: operations.BloggerCommentsMarkAsSpamRequest) -> operations.BloggerCommentsMarkAsSpamResponse:
        r"""Marks a comment as spam by blog id, post id and comment id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/spam", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsMarkAsSpamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    
    def blogger_comments_remove_content(self, request: operations.BloggerCommentsRemoveContentRequest) -> operations.BloggerCommentsRemoveContentResponse:
        r"""Removes the content of a comment by blog id, post id and comment id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/posts/{postId}/comments/{commentId}/removecontent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerCommentsRemoveContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Comment])
                res.comment = out

        return res

    