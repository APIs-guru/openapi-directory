import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Services:
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

    
    def monitoring_services_create(self, request: operations.MonitoringServicesCreateRequest) -> operations.MonitoringServicesCreateResponse:
        r"""Create a Service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/services", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out

        return res

    
    def monitoring_services_list(self, request: operations.MonitoringServicesListRequest) -> operations.MonitoringServicesListResponse:
        r"""List Services for this Metrics Scope.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServicesResponse])
                res.list_services_response = out

        return res

    
    def monitoring_services_service_level_objectives_create(self, request: operations.MonitoringServicesServiceLevelObjectivesCreateRequest) -> operations.MonitoringServicesServiceLevelObjectivesCreateResponse:
        r"""Create a ServiceLevelObjective for the given Service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/serviceLevelObjectives", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesServiceLevelObjectivesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceLevelObjective])
                res.service_level_objective = out

        return res

    
    def monitoring_services_service_level_objectives_delete(self, request: operations.MonitoringServicesServiceLevelObjectivesDeleteRequest) -> operations.MonitoringServicesServiceLevelObjectivesDeleteResponse:
        r"""Delete the given ServiceLevelObjective.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesServiceLevelObjectivesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def monitoring_services_service_level_objectives_get(self, request: operations.MonitoringServicesServiceLevelObjectivesGetRequest) -> operations.MonitoringServicesServiceLevelObjectivesGetResponse:
        r"""Get a ServiceLevelObjective by name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesServiceLevelObjectivesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceLevelObjective])
                res.service_level_objective = out

        return res

    
    def monitoring_services_service_level_objectives_list(self, request: operations.MonitoringServicesServiceLevelObjectivesListRequest) -> operations.MonitoringServicesServiceLevelObjectivesListResponse:
        r"""List the ServiceLevelObjectives for the given Service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/serviceLevelObjectives", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesServiceLevelObjectivesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListServiceLevelObjectivesResponse])
                res.list_service_level_objectives_response = out

        return res

    
    def monitoring_services_service_level_objectives_patch(self, request: operations.MonitoringServicesServiceLevelObjectivesPatchRequest) -> operations.MonitoringServicesServiceLevelObjectivesPatchResponse:
        r"""Update the given ServiceLevelObjective.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MonitoringServicesServiceLevelObjectivesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServiceLevelObjective])
                res.service_level_objective = out

        return res

    