import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def securitycenter_projects_locations_clusters_get_container_threat_detection_settings(self, request: operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsRequest) -> operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse:
        r"""Get the ContainerThreatDetectionSettings resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsLocationsClustersGetContainerThreatDetectionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerThreatDetectionSettings])
                res.container_threat_detection_settings = out

        return res

    
    def securitycenter_projects_locations_clusters_update_container_threat_detection_settings(self, request: operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsRequest) -> operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse:
        r"""Update the ContainerThreatDetectionSettings resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsLocationsClustersUpdateContainerThreatDetectionSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContainerThreatDetectionSettings])
                res.container_threat_detection_settings = out

        return res

    
    def securitycenter_projects_web_security_scanner_settings_calculate(self, request: operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateRequest) -> operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse:
        r"""Calculates the effective WebSecurityScannerSettings based on its level in the resource hierarchy and its settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta2/{name}:calculate", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SecuritycenterProjectsWebSecurityScannerSettingsCalculateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WebSecurityScannerSettings])
                res.web_security_scanner_settings = out

        return res

    