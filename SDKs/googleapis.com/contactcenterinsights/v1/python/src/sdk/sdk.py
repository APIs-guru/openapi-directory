import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://contactcenterinsights.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def contactcenterinsights_projects_locations_conversations_analyses_create(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analyses", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def contactcenterinsights_projects_locations_conversations_analyses_list(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/analyses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse])
                res.google_cloud_contactcenterinsights_v1_list_analyses_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_conversations_calculate_stats(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{location}/conversations:calculateStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse])
                res.google_cloud_contactcenterinsights_v1_calculate_stats_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_conversations_create(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/conversations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1Conversation])
                res.google_cloud_contactcenterinsights_v1_conversation = out

        return res

    
    
    def contactcenterinsights_projects_locations_conversations_list(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsListRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse])
                res.google_cloud_contactcenterinsights_v1_list_conversations_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_insightsdata_export(self, request: operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest) -> operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/insightsdata:export", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_calculate_issue_model_stats(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{issueModel}:calculateIssueModelStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse])
                res.google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_create(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/issueModels", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_deploy(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:deploy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_issues_list(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/issues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse])
                res.google_cloud_contactcenterinsights_v1_list_issues_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_list(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/issueModels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse])
                res.google_cloud_contactcenterinsights_v1_list_issue_models_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_issue_models_undeploy(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:undeploy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def contactcenterinsights_projects_locations_operations_cancel(self, request: operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest) -> operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def contactcenterinsights_projects_locations_operations_list(self, request: operations.ContactcenterinsightsProjectsLocationsOperationsListRequest) -> operations.ContactcenterinsightsProjectsLocationsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_phrase_matchers_create(self, request: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/phraseMatchers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1PhraseMatcher])
                res.google_cloud_contactcenterinsights_v1_phrase_matcher = out

        return res

    
    
    def contactcenterinsights_projects_locations_phrase_matchers_list(self, request: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest) -> operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/phraseMatchers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse])
                res.google_cloud_contactcenterinsights_v1_list_phrase_matchers_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_views_create(self, request: operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/views", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    
    
    def contactcenterinsights_projects_locations_views_delete(self, request: operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def contactcenterinsights_projects_locations_views_get(self, request: operations.ContactcenterinsightsProjectsLocationsViewsGetRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    
    
    def contactcenterinsights_projects_locations_views_list(self, request: operations.ContactcenterinsightsProjectsLocationsViewsListRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/views", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListViewsResponse])
                res.google_cloud_contactcenterinsights_v1_list_views_response = out

        return res

    
    
    def contactcenterinsights_projects_locations_views_patch(self, request: operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    