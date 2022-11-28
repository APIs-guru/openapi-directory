import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Pages:
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

    
    def blogger_pages_delete(self, request: operations.BloggerPagesDeleteRequest) -> operations.BloggerPagesDeleteResponse:
        r"""Deletes a page by blog id and page id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def blogger_pages_get(self, request: operations.BloggerPagesGetRequest) -> operations.BloggerPagesGetResponse:
        r"""Gets a page by blog id and page id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def blogger_pages_insert(self, request: operations.BloggerPagesInsertRequest) -> operations.BloggerPagesInsertResponse:
        r"""Inserts a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def blogger_pages_list(self, request: operations.BloggerPagesListRequest) -> operations.BloggerPagesListResponse:
        r"""Lists pages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PageList])
                res.page_list = out

        return res

    
    def blogger_pages_patch(self, request: operations.BloggerPagesPatchRequest) -> operations.BloggerPagesPatchResponse:
        r"""Patches a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def blogger_pages_publish(self, request: operations.BloggerPagesPublishRequest) -> operations.BloggerPagesPublishResponse:
        r"""Publishes a page.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}/publish", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def blogger_pages_revert(self, request: operations.BloggerPagesRevertRequest) -> operations.BloggerPagesRevertResponse:
        r"""Reverts a published or scheduled page to draft state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}/revert", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesRevertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def blogger_pages_update(self, request: operations.BloggerPagesUpdateRequest) -> operations.BloggerPagesUpdateResponse:
        r"""Updates a page by blog id and page id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/blogs/{blogId}/pages/{pageId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BloggerPagesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    