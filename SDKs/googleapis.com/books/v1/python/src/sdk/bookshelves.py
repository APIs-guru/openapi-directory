import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Bookshelves:
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

    
    def books_bookshelves_get(self, request: operations.BooksBookshelvesGetRequest) -> operations.BooksBookshelvesGetResponse:
        r"""Retrieves metadata for a specific bookshelf for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/users/{userId}/bookshelves/{shelf}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksBookshelvesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bookshelf])
                res.bookshelf = out

        return res

    
    def books_bookshelves_list(self, request: operations.BooksBookshelvesListRequest) -> operations.BooksBookshelvesListResponse:
        r"""Retrieves a list of public bookshelves for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/users/{userId}/bookshelves", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksBookshelvesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bookshelves])
                res.bookshelves = out

        return res

    
    def books_bookshelves_volumes_list(self, request: operations.BooksBookshelvesVolumesListRequest) -> operations.BooksBookshelvesVolumesListResponse:
        r"""Retrieves volumes in a specific bookshelf for the specified user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/users/{userId}/bookshelves/{shelf}/volumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksBookshelvesVolumesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    