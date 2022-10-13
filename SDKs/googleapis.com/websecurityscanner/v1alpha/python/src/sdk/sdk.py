import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://websecurityscanner.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def websecurityscanner_projects_scan_configs_create(self, request: operations.WebsecurityscannerProjectsScanConfigsCreateRequest) -> operations.WebsecurityscannerProjectsScanConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanConfigs", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanConfig])
                res.scan_config = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_delete(self, request: operations.WebsecurityscannerProjectsScanConfigsDeleteRequest) -> operations.WebsecurityscannerProjectsScanConfigsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_list(self, request: operations.WebsecurityscannerProjectsScanConfigsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScanConfigsResponse])
                res.list_scan_configs_response = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_patch(self, request: operations.WebsecurityscannerProjectsScanConfigsPatchRequest) -> operations.WebsecurityscannerProjectsScanConfigsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanConfig])
                res.scan_config = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_crawled_urls_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/crawledUrls", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsCrawledUrlsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCrawledUrlsResponse])
                res.list_crawled_urls_response = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_finding_type_stats_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/findingTypeStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingTypeStatsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingTypeStatsResponse])
                res.list_finding_type_stats_response = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_findings_get(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Finding])
                res.finding = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_findings_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/findings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsFindingsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFindingsResponse])
                res.list_findings_response = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_list(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsListRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/scanRuns", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListScanRunsResponse])
                res.list_scan_runs_response = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_scan_runs_stop(self, request: operations.WebsecurityscannerProjectsScanConfigsScanRunsStopRequest) -> operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:stop", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsScanRunsStopResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanRun])
                res.scan_run = out

        return res

    
    
    def websecurityscanner_projects_scan_configs_start(self, request: operations.WebsecurityscannerProjectsScanConfigsStartRequest) -> operations.WebsecurityscannerProjectsScanConfigsStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:start", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebsecurityscannerProjectsScanConfigsStartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScanRun])
                res.scan_run = out

        return res

    