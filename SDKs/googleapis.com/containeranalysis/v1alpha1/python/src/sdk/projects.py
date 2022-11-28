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

    
    def containeranalysis_projects_notes_create(self, request: operations.ContaineranalysisProjectsNotesCreateRequest) -> operations.ContaineranalysisProjectsNotesCreateResponse:
        r"""Creates a new `Note`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/notes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsNotesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Note])
                res.note = out

        return res

    
    def containeranalysis_projects_notes_list(self, request: operations.ContaineranalysisProjectsNotesListRequest) -> operations.ContaineranalysisProjectsNotesListResponse:
        r"""Lists all `Notes` for a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/notes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsNotesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNotesResponse])
                res.list_notes_response = out

        return res

    
    def containeranalysis_projects_occurrences_create(self, request: operations.ContaineranalysisProjectsOccurrencesCreateRequest) -> operations.ContaineranalysisProjectsOccurrencesCreateResponse:
        r"""Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/occurrences", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsOccurrencesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Occurrence])
                res.occurrence = out

        return res

    
    def containeranalysis_projects_occurrences_get_vulnerability_summary(self, request: operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryRequest) -> operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse:
        r"""Gets a summary of the number and severity of occurrences.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/occurrences:vulnerabilitySummary", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsOccurrencesGetVulnerabilitySummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetVulnzOccurrencesSummaryResponse])
                res.get_vulnz_occurrences_summary_response = out

        return res

    
    def containeranalysis_projects_occurrences_list(self, request: operations.ContaineranalysisProjectsOccurrencesListRequest) -> operations.ContaineranalysisProjectsOccurrencesListResponse:
        r"""Lists active `Occurrences` for a given project matching the filters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/occurrences", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsOccurrencesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOccurrencesResponse])
                res.list_occurrences_response = out

        return res

    
    def containeranalysis_projects_operations_create(self, request: operations.ContaineranalysisProjectsOperationsCreateRequest) -> operations.ContaineranalysisProjectsOperationsCreateResponse:
        r"""Creates a new `Operation`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/operations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsOperationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def containeranalysis_projects_scan_configs_list(self, request: operations.ContaineranalysisProjectsScanConfigsListRequest) -> operations.ContaineranalysisProjectsScanConfigsListResponse:
        r"""Lists scan configurations for a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/scanConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContaineranalysisProjectsScanConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScanConfigsResponse])
                res.list_scan_configs_response = out

        return res

    