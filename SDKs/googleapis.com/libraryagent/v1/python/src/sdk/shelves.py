import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Shelves:
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

    
    def libraryagent_shelves_books_borrow(self, request: operations.LibraryagentShelvesBooksBorrowRequest) -> operations.LibraryagentShelvesBooksBorrowResponse:
        r"""Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:borrow", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksBorrowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_books_get(self, request: operations.LibraryagentShelvesBooksGetRequest) -> operations.LibraryagentShelvesBooksGetResponse:
        r"""Gets a book. Returns NOT_FOUND if the book does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_books_list(self, request: operations.LibraryagentShelvesBooksListRequest) -> operations.LibraryagentShelvesBooksListResponse:
        r"""Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/books", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1ListBooksResponse])
                res.google_example_libraryagent_v1_list_books_response = out

        return res

    
    def libraryagent_shelves_books_return(self, request: operations.LibraryagentShelvesBooksReturnRequest) -> operations.LibraryagentShelvesBooksReturnResponse:
        r"""Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:return", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_list(self, request: operations.LibraryagentShelvesListRequest) -> operations.LibraryagentShelvesListResponse:
        r"""Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/shelves"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1ListShelvesResponse])
                res.google_example_libraryagent_v1_list_shelves_response = out

        return res

    