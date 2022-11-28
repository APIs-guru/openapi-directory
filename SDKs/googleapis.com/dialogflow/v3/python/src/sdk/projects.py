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

    
    def dialogflow_projects_locations_agents_changelogs_list(self, request: operations.DialogflowProjectsLocationsAgentsChangelogsListRequest) -> operations.DialogflowProjectsLocationsAgentsChangelogsListResponse:
        r"""Returns the list of Changelogs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/changelogs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsChangelogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListChangelogsResponse])
                res.google_cloud_dialogflow_cx_v3_list_changelogs_response = out

        return res

    
    def dialogflow_projects_locations_agents_create(self, request: operations.DialogflowProjectsLocationsAgentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsCreateResponse:
        r"""Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/agents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Agent])
                res.google_cloud_dialogflow_cx_v3_agent = out

        return res

    
    def dialogflow_projects_locations_agents_environments_continuous_test_results_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse:
        r"""Fetches a list of continuous test results for a given environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/continuousTestResults", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListContinuousTestResultsResponse])
                res.google_cloud_dialogflow_cx_v3_list_continuous_test_results_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_create(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse:
        r"""Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_environments_deploy_flow(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse:
        r"""Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{environment}:deployFlow", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_environments_deployments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse:
        r"""Returns the list of all deployments in the specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/deployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListDeploymentsResponse])
                res.google_cloud_dialogflow_cx_v3_list_deployments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_create(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse:
        r"""Creates an Experiment in the specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/experiments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Experiment])
                res.google_cloud_dialogflow_cx_v3_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse:
        r"""Returns the list of all experiments in the specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/experiments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListExperimentsResponse])
                res.google_cloud_dialogflow_cx_v3_list_experiments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_start(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse:
        r"""Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:start", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Experiment])
                res.google_cloud_dialogflow_cx_v3_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_stop(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse:
        r"""Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:stop", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Experiment])
                res.google_cloud_dialogflow_cx_v3_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse:
        r"""Returns the list of all environments in the specified Agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListEnvironmentsResponse])
                res.google_cloud_dialogflow_cx_v3_list_environments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_lookup_environment_history(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse:
        r"""Looks up the history of the specified Environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:lookupEnvironmentHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3LookupEnvironmentHistoryResponse])
                res.google_cloud_dialogflow_cx_v3_lookup_environment_history_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_run_continuous_test(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse:
        r"""Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{environment}:runContinuousTest", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse:
        r"""Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/flows", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Flow])
                res.google_cloud_dialogflow_cx_v3_flow = out

        return res

    
    def dialogflow_projects_locations_agents_flows_export(self, request: operations.DialogflowProjectsLocationsAgentsFlowsExportRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsExportResponse:
        r"""Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_import(self, request: operations.DialogflowProjectsLocationsAgentsFlowsImportRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsImportResponse:
        r"""Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/flows:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsListResponse:
        r"""Returns the list of all flows in the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/flows", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListFlowsResponse])
                res.google_cloud_dialogflow_cx_v3_list_flows_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_pages_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse:
        r"""Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/pages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Page])
                res.google_cloud_dialogflow_cx_v3_page = out

        return res

    
    def dialogflow_projects_locations_agents_flows_pages_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsPagesListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse:
        r"""Returns the list of all pages in the specified flow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/pages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListPagesResponse])
                res.google_cloud_dialogflow_cx_v3_list_pages_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_train(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTrainRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse:
        r"""Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:train", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_transition_route_groups_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse:
        r"""Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/transitionRouteGroups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3TransitionRouteGroup])
                res.google_cloud_dialogflow_cx_v3_transition_route_group = out

        return res

    
    def dialogflow_projects_locations_agents_flows_transition_route_groups_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse:
        r"""Returns the list of all transition route groups in the specified flow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/transitionRouteGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListTransitionRouteGroupsResponse])
                res.google_cloud_dialogflow_cx_v3_list_transition_route_groups_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_validate(self, request: operations.DialogflowProjectsLocationsAgentsFlowsValidateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse:
        r"""Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:validate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3FlowValidationResult])
                res.google_cloud_dialogflow_cx_v3_flow_validation_result = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_compare_versions(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse:
        r"""Compares the specified base version with target version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{baseVersion}:compareVersions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3CompareVersionsResponse])
                res.google_cloud_dialogflow_cx_v3_compare_versions_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse:
        r"""Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse:
        r"""Returns the list of all versions in the specified Flow.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListVersionsResponse])
                res.google_cloud_dialogflow_cx_v3_list_versions_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_load(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse:
        r"""Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:load", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_intents_create(self, request: operations.DialogflowProjectsLocationsAgentsIntentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse:
        r"""Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/intents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Intent])
                res.google_cloud_dialogflow_cx_v3_intent = out

        return res

    
    def dialogflow_projects_locations_agents_intents_list(self, request: operations.DialogflowProjectsLocationsAgentsIntentsListRequest) -> operations.DialogflowProjectsLocationsAgentsIntentsListResponse:
        r"""Returns the list of all intents in the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/intents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsIntentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListIntentsResponse])
                res.google_cloud_dialogflow_cx_v3_list_intents_response = out

        return res

    
    def dialogflow_projects_locations_agents_list(self, request: operations.DialogflowProjectsLocationsAgentsListRequest) -> operations.DialogflowProjectsLocationsAgentsListResponse:
        r"""Returns the list of all agents in the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/agents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListAgentsResponse])
                res.google_cloud_dialogflow_cx_v3_list_agents_response = out

        return res

    
    def dialogflow_projects_locations_agents_restore(self, request: operations.DialogflowProjectsLocationsAgentsRestoreRequest) -> operations.DialogflowProjectsLocationsAgentsRestoreResponse:
        r"""Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_detect_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse:
        r"""Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{session}:detectIntent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3DetectIntentResponse])
                res.google_cloud_dialogflow_cx_v3_detect_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_entity_types_create(self, request: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse:
        r"""Creates a session entity type.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/entityTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3SessionEntityType])
                res.google_cloud_dialogflow_cx_v3_session_entity_type = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_entity_types_list(self, request: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse:
        r"""Returns the list of all session entity types in the specified session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/entityTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListSessionEntityTypesResponse])
                res.google_cloud_dialogflow_cx_v3_list_session_entity_types_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_fulfill_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse:
        r"""Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{session}:fulfillIntent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3FulfillIntentResponse])
                res.google_cloud_dialogflow_cx_v3_fulfill_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_match_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse:
        r"""Returns preliminary intent match results, doesn't change the session status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{session}:matchIntent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3MatchIntentResponse])
                res.google_cloud_dialogflow_cx_v3_match_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse:
        r"""Batch deletes test cases.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_batch_run(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse:
        r"""Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases:batchRun", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_calculate_coverage(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse:
        r"""Calculates the test coverage for an agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{agent}/testCases:calculateCoverage", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3CalculateCoverageResponse])
                res.google_cloud_dialogflow_cx_v3_calculate_coverage_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_create(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse:
        r"""Creates a test case for the given agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3TestCase])
                res.google_cloud_dialogflow_cx_v3_test_case = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_export(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesExportRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse:
        r"""Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases:export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_import(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesImportRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse:
        r"""Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_list(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesListRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesListResponse:
        r"""Fetches a list of test cases for a given agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/testCases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListTestCasesResponse])
                res.google_cloud_dialogflow_cx_v3_list_test_cases_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_results_list(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesResultsListRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse:
        r"""Fetches a list of results for a given test case.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/results", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListTestCaseResultsResponse])
                res.google_cloud_dialogflow_cx_v3_list_test_case_results_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_run(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesRunRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse:
        r"""Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:run", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_webhooks_create(self, request: operations.DialogflowProjectsLocationsAgentsWebhooksCreateRequest) -> operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse:
        r"""Creates a webhook in the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/webhooks", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3Webhook])
                res.google_cloud_dialogflow_cx_v3_webhook = out

        return res

    
    def dialogflow_projects_locations_agents_webhooks_list(self, request: operations.DialogflowProjectsLocationsAgentsWebhooksListRequest) -> operations.DialogflowProjectsLocationsAgentsWebhooksListResponse:
        r"""Returns the list of all webhooks in the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/webhooks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsWebhooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListWebhooksResponse])
                res.google_cloud_dialogflow_cx_v3_list_webhooks_response = out

        return res

    
    def dialogflow_projects_locations_list(self, request: operations.DialogflowProjectsLocationsListRequest) -> operations.DialogflowProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudLocationListLocationsResponse])
                res.google_cloud_location_list_locations_response = out

        return res

    
    def dialogflow_projects_locations_security_settings_create(self, request: operations.DialogflowProjectsLocationsSecuritySettingsCreateRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse:
        r"""Create security settings in the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/securitySettings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3SecuritySettings])
                res.google_cloud_dialogflow_cx_v3_security_settings = out

        return res

    
    def dialogflow_projects_locations_security_settings_delete(self, request: operations.DialogflowProjectsLocationsSecuritySettingsDeleteRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse:
        r"""Deletes the specified SecuritySettings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_security_settings_list(self, request: operations.DialogflowProjectsLocationsSecuritySettingsListRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsListResponse:
        r"""Returns the list of all security settings in the specified location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{parent}/securitySettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3ListSecuritySettingsResponse])
                res.google_cloud_dialogflow_cx_v3_list_security_settings_response = out

        return res

    
    def dialogflow_projects_locations_security_settings_patch(self, request: operations.DialogflowProjectsLocationsSecuritySettingsPatchRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse:
        r"""Updates the specified SecuritySettings.
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

        res = operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3SecuritySettings])
                res.google_cloud_dialogflow_cx_v3_security_settings = out

        return res

    
    def dialogflow_projects_operations_cancel(self, request: operations.DialogflowProjectsOperationsCancelRequest) -> operations.DialogflowProjectsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_operations_get(self, request: operations.DialogflowProjectsOperationsGetRequest) -> operations.DialogflowProjectsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_operations_list(self, request: operations.DialogflowProjectsOperationsListRequest) -> operations.DialogflowProjectsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v3/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    