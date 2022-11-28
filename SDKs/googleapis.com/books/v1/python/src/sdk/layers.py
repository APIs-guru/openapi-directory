import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Layers:
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

    
    def books_layers_annotation_data_get(self, request: operations.BooksLayersAnnotationDataGetRequest) -> operations.BooksLayersAnnotationDataGetResponse:
        r"""Gets the annotation data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersAnnotationDataGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DictionaryAnnotationdata])
                res.dictionary_annotationdata = out

        return res

    
    def books_layers_annotation_data_list(self, request: operations.BooksLayersAnnotationDataListRequest) -> operations.BooksLayersAnnotationDataListResponse:
        r"""Gets the annotation data for a volume and layer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layers/{layerId}/data", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersAnnotationDataListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Annotationsdata])
                res.annotationsdata = out

        return res

    
    def books_layers_get(self, request: operations.BooksLayersGetRequest) -> operations.BooksLayersGetResponse:
        r"""Gets the layer summary for a volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layersummary/{summaryId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Layersummary])
                res.layersummary = out

        return res

    
    def books_layers_list(self, request: operations.BooksLayersListRequest) -> operations.BooksLayersListResponse:
        r"""List the layer summaries for a volume.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layersummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Layersummaries])
                res.layersummaries = out

        return res

    
    def books_layers_volume_annotations_get(self, request: operations.BooksLayersVolumeAnnotationsGetRequest) -> operations.BooksLayersVolumeAnnotationsGetResponse:
        r"""Gets the volume annotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersVolumeAnnotationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumeannotation])
                res.volumeannotation = out

        return res

    
    def books_layers_volume_annotations_list(self, request: operations.BooksLayersVolumeAnnotationsListRequest) -> operations.BooksLayersVolumeAnnotationsListResponse:
        r"""Gets the volume annotations for a volume and layer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/books/v1/volumes/{volumeId}/layers/{layerId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BooksLayersVolumeAnnotationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Volumeannotations])
                res.volumeannotations = out

        return res

    