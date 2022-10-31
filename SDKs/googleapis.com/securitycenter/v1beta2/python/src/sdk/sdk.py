import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://securitycenter.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def securitycenter_projects_locations_clusters_get_container_threat_detection_settings(self, request: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest) -> operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerThreatDetectionSettings])
                res.container_threat_detection_settings = out

        return res

    
    def securitycenter_projects_locations_clusters_update_container_threat_detection_settings(self, request: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest) -> operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerThreatDetectionSettings])
                res.container_threat_detection_settings = out

        return res

    
    def securitycenter_projects_web_security_scanner_settings_calculate(self, request: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest) -> operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta2/{name}:calculate", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebSecurityScannerSettings])
                res.web_security_scanner_settings = out

        return res

    