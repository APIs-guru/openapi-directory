import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://playdeveloperreporting.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def playdeveloperreporting_anomalies_list(self, request: operations.PlaydeveloperreportingAnomaliesListRequest) -> operations.PlaydeveloperreportingAnomaliesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/anomalies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaydeveloperreportingAnomaliesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePlayDeveloperReportingV1alpha1ListAnomaliesResponse])
                res.google_play_developer_reporting_v1alpha1_list_anomalies_response = out

        return res

    
    
    def playdeveloperreporting_vitals_errors_issues_search(self, request: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest) -> operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/errorIssues:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse])
                res.google_play_developer_reporting_v1alpha1_search_error_issues_response = out

        return res

    
    
    def playdeveloperreporting_vitals_errors_reports_search(self, request: operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest) -> operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/errorReports:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse])
                res.google_play_developer_reporting_v1alpha1_search_error_reports_response = out

        return res

    
    
    def playdeveloperreporting_vitals_stuckbackgroundwakelockrate_get(self, request: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest) -> operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePlayDeveloperReportingV1alpha1StuckBackgroundWakelockRateMetricSet])
                res.google_play_developer_reporting_v1alpha1_stuck_background_wakelock_rate_metric_set = out

        return res

    
    
    def playdeveloperreporting_vitals_stuckbackgroundwakelockrate_query(self, request: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest) -> operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha1/{name}:query", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GooglePlayDeveloperReportingV1alpha1QueryStuckBackgroundWakelockRateMetricSetResponse])
                res.google_play_developer_reporting_v1alpha1_query_stuck_background_wakelock_rate_metric_set_response = out

        return res

    