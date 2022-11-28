import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def monitoring_locations_global_metrics_scopes_list_metrics_scopes_by_monitored_project(self, request: operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectRequest) -> operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse:
        r"""Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringLocationsGlobalMetricsScopesListMetricsScopesByMonitoredProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMetricsScopesByMonitoredProjectResponse])
                res.list_metrics_scopes_by_monitored_project_response = out

        return res

    
    def monitoring_locations_global_metrics_scopes_projects_create(self, request: operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateRequest) -> operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse:
        r"""Adds a MonitoredProject with the given project ID to the specified Metrics Scope.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/projects", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringLocationsGlobalMetricsScopesProjectsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    