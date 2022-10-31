import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://libraryagent.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def libraryagent_shelves_books_borrow(self, request: operations.LibraryagentShelvesBooksBorrowRequest) -> operations.LibraryagentShelvesBooksBorrowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:borrow", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksBorrowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_books_get(self, request: operations.LibraryagentShelvesBooksGetRequest) -> operations.LibraryagentShelvesBooksGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_books_list(self, request: operations.LibraryagentShelvesBooksListRequest) -> operations.LibraryagentShelvesBooksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/books", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1ListBooksResponse])
                res.google_example_libraryagent_v1_list_books_response = out

        return res

    
    def libraryagent_shelves_books_return(self, request: operations.LibraryagentShelvesBooksReturnRequest) -> operations.LibraryagentShelvesBooksReturnResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:return", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesBooksReturnResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1Book])
                res.google_example_libraryagent_v1_book = out

        return res

    
    def libraryagent_shelves_list(self, request: operations.LibraryagentShelvesListRequest) -> operations.LibraryagentShelvesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/shelves"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.LibraryagentShelvesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleExampleLibraryagentV1ListShelvesResponse])
                res.google_example_libraryagent_v1_list_shelves_response = out

        return res

    