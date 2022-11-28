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

    
    def contactcenterinsights_projects_locations_conversations_analyses_create(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse:
        r"""Creates an analysis. The long running operation is done when the analysis has completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analyses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_analyses_list(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse:
        r"""Lists analyses.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/analyses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsAnalysesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListAnalysesResponse])
                res.google_cloud_contactcenterinsights_v1_list_analyses_response = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_bulk_analyze(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse:
        r"""Analyzes multiple conversations in a single request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/conversations:bulkAnalyze", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_calculate_stats(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse:
        r"""Gets conversation statistics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{location}/conversations:calculateStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsCalculateStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1CalculateStatsResponse])
                res.google_cloud_contactcenterinsights_v1_calculate_stats_response = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_create(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse:
        r"""Creates a conversation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/conversations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1Conversation])
                res.google_cloud_contactcenterinsights_v1_conversation = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_ingest(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsIngestRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse:
        r"""Imports conversations and processes them according to the user's configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/conversations:ingest", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsIngestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_conversations_list(self, request: operations.ContactcenterinsightsProjectsLocationsConversationsListRequest) -> operations.ContactcenterinsightsProjectsLocationsConversationsListResponse:
        r"""Lists conversations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsConversationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListConversationsResponse])
                res.google_cloud_contactcenterinsights_v1_list_conversations_response = out

        return res

    
    def contactcenterinsights_projects_locations_insightsdata_export(self, request: operations.ContactcenterinsightsProjectsLocationsInsightsdataExportRequest) -> operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse:
        r"""Export insights data to a destination defined in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/insightsdata:export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsInsightsdataExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_calculate_issue_model_stats(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse:
        r"""Gets an issue model's statistics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{issueModel}:calculateIssueModelStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsCalculateIssueModelStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse])
                res.google_cloud_contactcenterinsights_v1_calculate_issue_model_stats_response = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_create(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse:
        r"""Creates an issue model.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/issueModels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_deploy(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse:
        r"""Deploys an issue model. Returns an error if a model is already deployed. An issue model can only be used in analysis after it has been deployed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:deploy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsDeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_issues_list(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse:
        r"""Lists issues.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/issues", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsIssuesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListIssuesResponse])
                res.google_cloud_contactcenterinsights_v1_list_issues_response = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_list(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsListRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse:
        r"""Lists issue models.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/issueModels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListIssueModelsResponse])
                res.google_cloud_contactcenterinsights_v1_list_issue_models_response = out

        return res

    
    def contactcenterinsights_projects_locations_issue_models_undeploy(self, request: operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployRequest) -> operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse:
        r"""Undeploys an issue model. An issue model can not be used in analysis after it has been undeployed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:undeploy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsIssueModelsUndeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def contactcenterinsights_projects_locations_operations_cancel(self, request: operations.ContactcenterinsightsProjectsLocationsOperationsCancelRequest) -> operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def contactcenterinsights_projects_locations_operations_list(self, request: operations.ContactcenterinsightsProjectsLocationsOperationsListRequest) -> operations.ContactcenterinsightsProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    
    def contactcenterinsights_projects_locations_phrase_matchers_create(self, request: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse:
        r"""Creates a phrase matcher.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/phraseMatchers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsPhraseMatchersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1PhraseMatcher])
                res.google_cloud_contactcenterinsights_v1_phrase_matcher = out

        return res

    
    def contactcenterinsights_projects_locations_phrase_matchers_list(self, request: operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest) -> operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse:
        r"""Lists phrase matchers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/phraseMatchers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse])
                res.google_cloud_contactcenterinsights_v1_list_phrase_matchers_response = out

        return res

    
    def contactcenterinsights_projects_locations_views_create(self, request: operations.ContactcenterinsightsProjectsLocationsViewsCreateRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse:
        r"""Creates a view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/views", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    
    def contactcenterinsights_projects_locations_views_delete(self, request: operations.ContactcenterinsightsProjectsLocationsViewsDeleteRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse:
        r"""Deletes a view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def contactcenterinsights_projects_locations_views_get(self, request: operations.ContactcenterinsightsProjectsLocationsViewsGetRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsGetResponse:
        r"""Gets a view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    
    def contactcenterinsights_projects_locations_views_list(self, request: operations.ContactcenterinsightsProjectsLocationsViewsListRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsListResponse:
        r"""Lists views.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/views", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1ListViewsResponse])
                res.google_cloud_contactcenterinsights_v1_list_views_response = out

        return res

    
    def contactcenterinsights_projects_locations_views_patch(self, request: operations.ContactcenterinsightsProjectsLocationsViewsPatchRequest) -> operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse:
        r"""Updates a view.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContactcenterinsightsProjectsLocationsViewsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudContactcenterinsightsV1View])
                res.google_cloud_contactcenterinsights_v1_view = out

        return res

    