import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://dialogflow.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def dialogflow_projects_locations_agents_changelogs_list(self, request: operations.DialogflowProjectsLocationsAgentsChangelogsListRequest) -> operations.DialogflowProjectsLocationsAgentsChangelogsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/changelogs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsChangelogsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListChangelogsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_changelogs_response = out

        return res

    
    def dialogflow_projects_locations_agents_create(self, request: operations.DialogflowProjectsLocationsAgentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/agents", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Agent])
                res.google_cloud_dialogflow_cx_v3beta1_agent = out

        return res

    
    def dialogflow_projects_locations_agents_environments_continuous_test_results_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/continuousTestResults", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListContinuousTestResultsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_continuous_test_results_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_create(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/environments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_environments_deploy_flow(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{environment}:deployFlow", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_environments_deployments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/deployments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListDeploymentsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_deployments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_create(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/experiments", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Experiment])
                res.google_cloud_dialogflow_cx_v3beta1_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/experiments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListExperimentsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_experiments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_start(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:start", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Experiment])
                res.google_cloud_dialogflow_cx_v3beta1_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_experiments_stop(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:stop", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Experiment])
                res.google_cloud_dialogflow_cx_v3beta1_experiment = out

        return res

    
    def dialogflow_projects_locations_agents_environments_list(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsListRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/environments", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_environments_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_lookup_environment_history(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:lookupEnvironmentHistory", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse])
                res.google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response = out

        return res

    
    def dialogflow_projects_locations_agents_environments_run_continuous_test(self, request: operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest) -> operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{environment}:runContinuousTest", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/flows", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Flow])
                res.google_cloud_dialogflow_cx_v3beta1_flow = out

        return res

    
    def dialogflow_projects_locations_agents_flows_export(self, request: operations.DialogflowProjectsLocationsAgentsFlowsExportRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:export", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_import(self, request: operations.DialogflowProjectsLocationsAgentsFlowsImportRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/flows:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/flows", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListFlowsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_flows_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_pages_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/pages", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Page])
                res.google_cloud_dialogflow_cx_v3beta1_page = out

        return res

    
    def dialogflow_projects_locations_agents_flows_pages_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsPagesListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/pages", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListPagesResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_pages_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_train(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTrainRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:train", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_transition_route_groups_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/transitionRouteGroups", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1TransitionRouteGroup])
                res.google_cloud_dialogflow_cx_v3beta1_transition_route_group = out

        return res

    
    def dialogflow_projects_locations_agents_flows_transition_route_groups_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/transitionRouteGroups", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListTransitionRouteGroupsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_transition_route_groups_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_validate(self, request: operations.DialogflowProjectsLocationsAgentsFlowsValidateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:validate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1FlowValidationResult])
                res.google_cloud_dialogflow_cx_v3beta1_flow_validation_result = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_compare_versions(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{baseVersion}:compareVersions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1CompareVersionsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_compare_versions_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_create(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/versions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_list(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsListRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/versions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListVersionsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_versions_response = out

        return res

    
    def dialogflow_projects_locations_agents_flows_versions_load(self, request: operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest) -> operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:load", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_intents_create(self, request: operations.DialogflowProjectsLocationsAgentsIntentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/intents", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Intent])
                res.google_cloud_dialogflow_cx_v3beta1_intent = out

        return res

    
    def dialogflow_projects_locations_agents_intents_list(self, request: operations.DialogflowProjectsLocationsAgentsIntentsListRequest) -> operations.DialogflowProjectsLocationsAgentsIntentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/intents", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsIntentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListIntentsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_intents_response = out

        return res

    
    def dialogflow_projects_locations_agents_list(self, request: operations.DialogflowProjectsLocationsAgentsListRequest) -> operations.DialogflowProjectsLocationsAgentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/agents", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListAgentsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_agents_response = out

        return res

    
    def dialogflow_projects_locations_agents_restore(self, request: operations.DialogflowProjectsLocationsAgentsRestoreRequest) -> operations.DialogflowProjectsLocationsAgentsRestoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:restore", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_detect_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{session}:detectIntent", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1DetectIntentResponse])
                res.google_cloud_dialogflow_cx_v3beta1_detect_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_entity_types_create(self, request: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/entityTypes", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1SessionEntityType])
                res.google_cloud_dialogflow_cx_v3beta1_session_entity_type = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_entity_types_list(self, request: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/entityTypes", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListSessionEntityTypesResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_session_entity_types_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_fulfill_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{session}:fulfillIntent", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1FulfillIntentResponse])
                res.google_cloud_dialogflow_cx_v3beta1_fulfill_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_sessions_match_intent(self, request: operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest) -> operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{session}:matchIntent", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1MatchIntentResponse])
                res.google_cloud_dialogflow_cx_v3beta1_match_intent_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases:batchDelete", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_batch_run(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases:batchRun", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_calculate_coverage(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{agent}/testCases:calculateCoverage", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1CalculateCoverageResponse])
                res.google_cloud_dialogflow_cx_v3beta1_calculate_coverage_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_create(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesCreateRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1TestCase])
                res.google_cloud_dialogflow_cx_v3beta1_test_case = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_export(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesExportRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases:export", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_import(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesImportRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases:import", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_list(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesListRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/testCases", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListTestCasesResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_test_cases_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_results_list(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesResultsListRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/results", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListTestCaseResultsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_test_case_results_response = out

        return res

    
    def dialogflow_projects_locations_agents_test_cases_run(self, request: operations.DialogflowProjectsLocationsAgentsTestCasesRunRequest) -> operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:run", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agents_webhooks_create(self, request: operations.DialogflowProjectsLocationsAgentsWebhooksCreateRequest) -> operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/webhooks", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1Webhook])
                res.google_cloud_dialogflow_cx_v3beta1_webhook = out

        return res

    
    def dialogflow_projects_locations_agents_webhooks_list(self, request: operations.DialogflowProjectsLocationsAgentsWebhooksListRequest) -> operations.DialogflowProjectsLocationsAgentsWebhooksListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/webhooks", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentsWebhooksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListWebhooksResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_webhooks_response = out

        return res

    
    def dialogflow_projects_locations_list(self, request: operations.DialogflowProjectsLocationsListRequest) -> operations.DialogflowProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}/locations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudLocationListLocationsResponse])
                res.google_cloud_location_list_locations_response = out

        return res

    
    def dialogflow_projects_locations_security_settings_create(self, request: operations.DialogflowProjectsLocationsSecuritySettingsCreateRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/securitySettings", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1SecuritySettings])
                res.google_cloud_dialogflow_cx_v3beta1_security_settings = out

        return res

    
    def dialogflow_projects_locations_security_settings_delete(self, request: operations.DialogflowProjectsLocationsSecuritySettingsDeleteRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_security_settings_list(self, request: operations.DialogflowProjectsLocationsSecuritySettingsListRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{parent}/securitySettings", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1ListSecuritySettingsResponse])
                res.google_cloud_dialogflow_cx_v3beta1_list_security_settings_response = out

        return res

    
    def dialogflow_projects_locations_security_settings_patch(self, request: operations.DialogflowProjectsLocationsSecuritySettingsPatchRequest) -> operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowCxV3beta1SecuritySettings])
                res.google_cloud_dialogflow_cx_v3beta1_security_settings = out

        return res

    
    def dialogflow_projects_operations_cancel(self, request: operations.DialogflowProjectsOperationsCancelRequest) -> operations.DialogflowProjectsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}:cancel", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_operations_get(self, request: operations.DialogflowProjectsOperationsGetRequest) -> operations.DialogflowProjectsOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_operations_list(self, request: operations.DialogflowProjectsOperationsListRequest) -> operations.DialogflowProjectsOperationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v3beta1/{name}/operations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    