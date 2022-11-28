import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Volumes:
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

    
    def books_volumes_associated_list(self, request: operations.BooksVolumesAssociatedListRequest) -> operations.BooksVolumesAssociatedListResponse:
        r"""Return a list of associated books.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/associated", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesAssociatedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_volumes_get(self, request: operations.BooksVolumesGetRequest) -> operations.BooksVolumesGetResponse:
        r"""Gets volume information for a single volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volume])
                res.volume = out

        return res

    
    def books_volumes_list(self, request: operations.BooksVolumesListRequest) -> operations.BooksVolumesListResponse:
        r"""Performs a book search.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/volumes"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_volumes_mybooks_list(self, request: operations.BooksVolumesMybooksListRequest) -> operations.BooksVolumesMybooksListResponse:
        r"""Return a list of books in My Library.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/volumes/mybooks"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesMybooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_volumes_recommended_list(self, request: operations.BooksVolumesRecommendedListRequest) -> operations.BooksVolumesRecommendedListResponse:
        r"""Return a list of recommended books for the current user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/volumes/recommended"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesRecommendedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_volumes_recommended_rate(self, request: operations.BooksVolumesRecommendedRateRequest) -> operations.BooksVolumesRecommendedRateResponse:
        r"""Rate a recommended book for the current user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/volumes/recommended/rate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesRecommendedRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BooksVolumesRecommendedRateResponse])
                res.books_volumes_recommended_rate_response = out

        return res

    
    def books_volumes_useruploaded_list(self, request: operations.BooksVolumesUseruploadedListRequest) -> operations.BooksVolumesUseruploadedListResponse:
        r"""Return a list of books uploaded by the current user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/volumes/useruploaded"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksVolumesUseruploadedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    