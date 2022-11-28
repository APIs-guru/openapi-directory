import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Mylibrary:
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

    
    def books_mylibrary_annotations_delete(self, request: operations.BooksMylibraryAnnotationsDeleteRequest) -> operations.BooksMylibraryAnnotationsDeleteResponse:
        r"""Deletes an annotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/annotations/{annotationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryAnnotationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_mylibrary_annotations_insert(self, request: operations.BooksMylibraryAnnotationsInsertRequest) -> operations.BooksMylibraryAnnotationsInsertResponse:
        r"""Inserts a new annotation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/mylibrary/annotations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryAnnotationsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Annotation])
                res.annotation = out

        return res

    
    def books_mylibrary_annotations_list(self, request: operations.BooksMylibraryAnnotationsListRequest) -> operations.BooksMylibraryAnnotationsListResponse:
        r"""Retrieves a list of annotations, possibly filtered.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/mylibrary/annotations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryAnnotationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Annotations])
                res.annotations = out

        return res

    
    def books_mylibrary_annotations_summary(self, request: operations.BooksMylibraryAnnotationsSummaryRequest) -> operations.BooksMylibraryAnnotationsSummaryResponse:
        r"""Gets the summary of specified layers.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/mylibrary/annotations/summary"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryAnnotationsSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnnotationsSummary])
                res.annotations_summary = out

        return res

    
    def books_mylibrary_annotations_update(self, request: operations.BooksMylibraryAnnotationsUpdateRequest) -> operations.BooksMylibraryAnnotationsUpdateResponse:
        r"""Updates an existing annotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/annotations/{annotationId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryAnnotationsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Annotation])
                res.annotation = out

        return res

    
    def books_mylibrary_bookshelves_add_volume(self, request: operations.BooksMylibraryBookshelvesAddVolumeRequest) -> operations.BooksMylibraryBookshelvesAddVolumeResponse:
        r"""Adds a volume to a bookshelf.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}/addVolume", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesAddVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_mylibrary_bookshelves_clear_volumes(self, request: operations.BooksMylibraryBookshelvesClearVolumesRequest) -> operations.BooksMylibraryBookshelvesClearVolumesResponse:
        r"""Clears all volumes from a bookshelf.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}/clearVolumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesClearVolumesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_mylibrary_bookshelves_get(self, request: operations.BooksMylibraryBookshelvesGetRequest) -> operations.BooksMylibraryBookshelvesGetResponse:
        r"""Retrieves metadata for a specific bookshelf belonging to the authenticated user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bookshelf])
                res.bookshelf = out

        return res

    
    def books_mylibrary_bookshelves_list(self, request: operations.BooksMylibraryBookshelvesListRequest) -> operations.BooksMylibraryBookshelvesListResponse:
        r"""Retrieves a list of bookshelves belonging to the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/books/v1/mylibrary/bookshelves"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Bookshelves])
                res.bookshelves = out

        return res

    
    def books_mylibrary_bookshelves_move_volume(self, request: operations.BooksMylibraryBookshelvesMoveVolumeRequest) -> operations.BooksMylibraryBookshelvesMoveVolumeResponse:
        r"""Moves a volume within a bookshelf.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}/moveVolume", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesMoveVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_mylibrary_bookshelves_remove_volume(self, request: operations.BooksMylibraryBookshelvesRemoveVolumeRequest) -> operations.BooksMylibraryBookshelvesRemoveVolumeResponse:
        r"""Removes a volume from a bookshelf.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}/removeVolume", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesRemoveVolumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def books_mylibrary_bookshelves_volumes_list(self, request: operations.BooksMylibraryBookshelvesVolumesListRequest) -> operations.BooksMylibraryBookshelvesVolumesListResponse:
        r"""Gets volume information for volumes on a bookshelf.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/bookshelves/{shelf}/volumes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryBookshelvesVolumesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumes])
                res.volumes = out

        return res

    
    def books_mylibrary_readingpositions_get(self, request: operations.BooksMylibraryReadingpositionsGetRequest) -> operations.BooksMylibraryReadingpositionsGetResponse:
        r"""Retrieves my reading position information for a volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/readingpositions/{volumeId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryReadingpositionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReadingPosition])
                res.reading_position = out

        return res

    
    def books_mylibrary_readingpositions_set_position(self, request: operations.BooksMylibraryReadingpositionsSetPositionRequest) -> operations.BooksMylibraryReadingpositionsSetPositionResponse:
        r"""Sets my reading position information for a volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/mylibrary/readingpositions/{volumeId}/setPosition", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksMylibraryReadingpositionsSetPositionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    