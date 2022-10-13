import warnings
import requests
from sdk.models import operations
from . import utils


SERVERS = [
	"https://apps.gov.bc.ca/pub/geomark",
	"https://test.apps.gov.bc.ca/pub/geomark",
	"https://delivery.apps.gov.bc.ca/pub/geomark",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def get_geomarks_geomark_id_bounding_box_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDBoundingBoxFileFormatExtensionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/boundingBox.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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

    
    
    def get_geomarks_geomark_id_feature_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/feature.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeomarksGeomarkIDFeatureFileFormatExtensionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_geomarks_geomark_id_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDFileFormatExtensionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeomarksGeomarkIDFileFormatExtensionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_geomarks_geomark_id_parts_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDPartsFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDPartsFileFormatExtensionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/parts.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGeomarksGeomarkIDPartsFileFormatExtensionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def get_geomarks_geomark_id_point_file_format_extension_(self, request: operations.GetGeomarksGeomarkIDPointFileFormatExtensionRequest) -> operations.GetGeomarksGeomarkIDPointFileFormatExtensionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/geomarks/{geomarkId}/point.{fileFormatExtension}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

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

    
    
    def post_geomarks_copy(self, request: operations.PostGeomarksCopyRequest) -> operations.PostGeomarksCopyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/geomarks/copy"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeomarksCopyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    
    def post_geomarks_new(self, request: operations.PostGeomarksNewRequest) -> operations.PostGeomarksNewResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/geomarks/new"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostGeomarksNewResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 302:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    