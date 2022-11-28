import requests
from sdk.models import operations
from . import utils

class Point:
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

    
    def get_geomarks_geomark_id_point_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDPointFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDPointFileFormatExtensionResponse:
        r"""Gets a single spatial point representative of the geomark.
        The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/point.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeomarksGeomarkIDPointFileFormatExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    