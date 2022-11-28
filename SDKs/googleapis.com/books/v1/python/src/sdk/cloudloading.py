import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Cloudloading:
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

    
    def books_cloudloading_add_book(self, request: operations.BooksCloudloadingAddBookRequest) -> operations.BooksCloudloadingAddBookResponse:
        r"""Add a user-upload volume and triggers processing.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/cloudloading/addBook"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksCloudloadingAddBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooksCloudloadingResource])
                res.books_cloudloading_resource = out

        return res

    
    def books_cloudloading_delete_book(self, request: operations.BooksCloudloadingDeleteBookRequest) -> operations.BooksCloudloadingDeleteBookResponse:
        r"""Remove the book and its contents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/cloudloading/deleteBook"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksCloudloadingDeleteBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_cloudloading_update_book(self, request: operations.BooksCloudloadingUpdateBookRequest) -> operations.BooksCloudloadingUpdateBookResponse:
        r"""Updates a user-upload volume.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/cloudloading/updateBook"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksCloudloadingUpdateBookResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooksCloudloadingResource])
                res.books_cloudloading_resource = out

        return res

    