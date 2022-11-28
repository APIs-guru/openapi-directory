import requests
from sdk.models import operations
from . import utils

class BoundingBox:
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

    
    def get_geomarks_geomark_id_bounding_box_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse:
        r"""Gets the bounding box of the geomark
        The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/boundingBox.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    