import requests
from typing import Any,Optional
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

    
    def websecurityscanner_projects_scan_configs_create(self, request: operations.WebsecurityscannerProjectsScanConfigsCreateRequest) -> operations.WebsecurityscannerProjectsScanConfigsCreateResponse:
        r"""Creates a new ScanConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanConfig])
                res.scan_config = out

        return res

    
    def websecurityscanner_projects_scan_configs_delete(self, request: operations.WebsecurityscannerProjectsScanConfigsDeleteRequest) -> operations.WebsecurityscannerProjectsScanConfigsDeleteResponse:
        r"""Deletes an existing ScanConfig and its child resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def websecurityscanner_projects_scan_configs_list(self, request: operations.WebsecurityscannerProjectsScanConfigsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsListResponse:
        r"""Lists ScanConfigs under a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScanConfigsResponse])
                res.list_scan_configs_response = out

        return res

    
    def websecurityscanner_projects_scan_configs_patch(self, request: operations.WebsecurityscannerProjectsScanConfigsPatchRequest) -> operations.WebsecurityscannerProjectsScanConfigsPatchResponse:
        r"""Updates a ScanConfig. This method support partial update of a ScanConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanConfig])
                res.scan_config = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_crawled_urls_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse:
        r"""List CrawledUrls under a given ScanRun.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/crawledUrls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCrawledUrlsResponse])
                res.list_crawled_urls_response = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_finding_type_stats_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse:
        r"""List all FindingTypeStats under a given ScanRun.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/findingTypeStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingTypeStatsResponse])
                res.list_finding_type_stats_response = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_findings_get(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse:
        r"""Gets a Finding.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_findings_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse:
        r"""List Findings under a given ScanRun.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/findings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingsResponse])
                res.list_findings_response = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse:
        r"""Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanRuns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScanRunsResponse])
                res.list_scan_runs_response = out

        return res

    
    def websecurityscanner_projects_scan_configs_scan_runs_stop(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse:
        r"""Stops a ScanRun. The stopped ScanRun is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:stop", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanRun])
                res.scan_run = out

        return res

    
    def websecurityscanner_projects_scan_configs_start(self, request: operations.WebsecurityscannerProjectsScanConfigsStartRequest) -> operations.WebsecurityscannerProjectsScanConfigsStartResponse:
        r"""Start a ScanRun according to the given ScanConfig.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:start", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanRun])
                res.scan_run = out

        return res

    