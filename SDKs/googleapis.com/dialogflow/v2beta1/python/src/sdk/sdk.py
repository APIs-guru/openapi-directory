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
    
    
    def dialogflow_projects_conversations_participants_suggestions_compile(self, request: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest) -> operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:compile", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1CompileSuggestionResponse])
                res.google_cloud_dialogflow_v2beta1_compile_suggestion_response = out

        return res

    
    
    def dialogflow_projects_conversations_participants_suggestions_list(self, request: operations.DialogflowProjectsConversationsParticipantsSuggestionsListRequest) -> operations.DialogflowProjectsConversationsParticipantsSuggestionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsConversationsParticipantsSuggestionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListSuggestionsResponse])
                res.google_cloud_dialogflow_v2beta1_list_suggestions_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_entity_types_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_entity_types_batch_update(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_create(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchCreate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_update(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_environments_create(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/environments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Environment])
                res.google_cloud_dialogflow_v2beta1_environment = out

        return res

    
    
    def dialogflow_projects_locations_agent_environments_get_history(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1EnvironmentHistory])
                res.google_cloud_dialogflow_v2beta1_environment_history = out

        return res

    
    
    def dialogflow_projects_locations_agent_environments_list(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListEnvironmentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_environments_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_export(self, request: operations.DialogflowProjectsLocationsAgentExportRequest) -> operations.DialogflowProjectsLocationsAgentExportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:export", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentExportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_get_validation_result(self, request: operations.DialogflowProjectsLocationsAgentGetValidationResultRequest) -> operations.DialogflowProjectsLocationsAgentGetValidationResultResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent/validationResult", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentGetValidationResultResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ValidationResult])
                res.google_cloud_dialogflow_v2beta1_validation_result = out

        return res

    
    
    def dialogflow_projects_locations_agent_import(self, request: operations.DialogflowProjectsLocationsAgentImportRequest) -> operations.DialogflowProjectsLocationsAgentImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:import", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentImportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_intents_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_intents_batch_update(self, request: operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_intents_create(self, request: operations.DialogflowProjectsLocationsAgentIntentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentIntentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Intent])
                res.google_cloud_dialogflow_v2beta1_intent = out

        return res

    
    
    def dialogflow_projects_locations_agent_intents_list(self, request: operations.DialogflowProjectsLocationsAgentIntentsListRequest) -> operations.DialogflowProjectsLocationsAgentIntentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListIntentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_intents_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_restore(self, request: operations.DialogflowProjectsLocationsAgentRestoreRequest) -> operations.DialogflowProjectsLocationsAgentRestoreResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:restore", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentRestoreResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_search(self, request: operations.DialogflowProjectsLocationsAgentSearchRequest) -> operations.DialogflowProjectsLocationsAgentSearchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSearchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SearchAgentsResponse])
                res.google_cloud_dialogflow_v2beta1_search_agents_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_contexts_create(self, request: operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest) -> operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Context])
                res.google_cloud_dialogflow_v2beta1_context = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_contexts_list(self, request: operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest) -> operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListContextsResponse])
                res.google_cloud_dialogflow_v2beta1_list_contexts_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_delete_contexts(self, request: operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest) -> operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_detect_intent(self, request: operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest) -> operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{session}:detectIntent", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1DetectIntentResponse])
                res.google_cloud_dialogflow_v2beta1_detect_intent_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_entity_types_create(self, request: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest) -> operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SessionEntityType])
                res.google_cloud_dialogflow_v2beta1_session_entity_type = out

        return res

    
    
    def dialogflow_projects_locations_agent_sessions_entity_types_list(self, request: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest) -> operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse])
                res.google_cloud_dialogflow_v2beta1_list_session_entity_types_response = out

        return res

    
    
    def dialogflow_projects_locations_agent_train(self, request: operations.DialogflowProjectsLocationsAgentTrainRequest) -> operations.DialogflowProjectsLocationsAgentTrainResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:train", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentTrainResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_agent_versions_create(self, request: operations.DialogflowProjectsLocationsAgentVersionsCreateRequest) -> operations.DialogflowProjectsLocationsAgentVersionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/versions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Version])
                res.google_cloud_dialogflow_v2beta1_version = out

        return res

    
    
    def dialogflow_projects_locations_agent_versions_list(self, request: operations.DialogflowProjectsLocationsAgentVersionsListRequest) -> operations.DialogflowProjectsLocationsAgentVersionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentVersionsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListVersionsResponse])
                res.google_cloud_dialogflow_v2beta1_list_versions_response = out

        return res

    
    
    def dialogflow_projects_locations_answer_records_list(self, request: operations.DialogflowProjectsLocationsAnswerRecordsListRequest) -> operations.DialogflowProjectsLocationsAnswerRecordsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/answerRecords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAnswerRecordsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse])
                res.google_cloud_dialogflow_v2beta1_list_answer_records_response = out

        return res

    
    
    def dialogflow_projects_locations_conversation_profiles_clear_suggestion_feature_config(self, request: operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest) -> operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{conversationProfile}:clearSuggestionFeatureConfig", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_conversation_profiles_create(self, request: operations.DialogflowProjectsLocationsConversationProfilesCreateRequest) -> operations.DialogflowProjectsLocationsConversationProfilesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversationProfiles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ConversationProfile])
                res.google_cloud_dialogflow_v2beta1_conversation_profile = out

        return res

    
    
    def dialogflow_projects_locations_conversation_profiles_list(self, request: operations.DialogflowProjectsLocationsConversationProfilesListRequest) -> operations.DialogflowProjectsLocationsConversationProfilesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversationProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListConversationProfilesResponse])
                res.google_cloud_dialogflow_v2beta1_list_conversation_profiles_response = out

        return res

    
    
    def dialogflow_projects_locations_conversation_profiles_set_suggestion_feature_config(self, request: operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest) -> operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{conversationProfile}:setSuggestionFeatureConfig", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_conversations_complete(self, request: operations.DialogflowProjectsLocationsConversationsCompleteRequest) -> operations.DialogflowProjectsLocationsConversationsCompleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}:complete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsCompleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Conversation])
                res.google_cloud_dialogflow_v2beta1_conversation = out

        return res

    
    
    def dialogflow_projects_locations_conversations_create(self, request: operations.DialogflowProjectsLocationsConversationsCreateRequest) -> operations.DialogflowProjectsLocationsConversationsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversations", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Conversation])
                res.google_cloud_dialogflow_v2beta1_conversation = out

        return res

    
    
    def dialogflow_projects_locations_conversations_list(self, request: operations.DialogflowProjectsLocationsConversationsListRequest) -> operations.DialogflowProjectsLocationsConversationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListConversationsResponse])
                res.google_cloud_dialogflow_v2beta1_list_conversations_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_messages_batch_create(self, request: operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest) -> operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/messages:batchCreate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse])
                res.google_cloud_dialogflow_v2beta1_batch_create_messages_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_messages_list(self, request: operations.DialogflowProjectsLocationsConversationsMessagesListRequest) -> operations.DialogflowProjectsLocationsConversationsMessagesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListMessagesResponse])
                res.google_cloud_dialogflow_v2beta1_list_messages_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_analyze_content(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{participant}:analyzeContent", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1AnalyzeContentResponse])
                res.google_cloud_dialogflow_v2beta1_analyze_content_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_create(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/participants", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Participant])
                res.google_cloud_dialogflow_v2beta1_participant = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_list(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsListRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListParticipantsResponse])
                res.google_cloud_dialogflow_v2beta1_list_participants_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_articles(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestArticles", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestArticlesResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_articles_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_faq_answers(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestFaqAnswers", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_faq_answers_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_smart_replies(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestSmartReplies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_smart_replies_response = out

        return res

    
    
    def dialogflow_projects_locations_conversations_suggestions_suggest_conversation_summary(self, request: operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest) -> operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{conversation}/suggestions:suggestConversationSummary", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_conversation_summary_response = out

        return res

    
    
    def dialogflow_projects_locations_delete_agent(self, request: operations.DialogflowProjectsLocationsDeleteAgentRequest) -> operations.DialogflowProjectsLocationsDeleteAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsDeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def dialogflow_projects_locations_get_agent(self, request: operations.DialogflowProjectsLocationsGetAgentRequest) -> operations.DialogflowProjectsLocationsGetAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsGetAgentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Agent])
                res.google_cloud_dialogflow_v2beta1_agent = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_create(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/knowledgeBases", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1KnowledgeBase])
                res.google_cloud_dialogflow_v2beta1_knowledge_base = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_create(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_delete(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_import(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents:import", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_list(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListDocumentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_documents_response = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_patch(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_documents_reload(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}:reload", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    
    def dialogflow_projects_locations_knowledge_bases_list(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesListRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/knowledgeBases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse])
                res.google_cloud_dialogflow_v2beta1_list_knowledge_bases_response = out

        return res

    
    
    def dialogflow_projects_locations_list(self, request: operations.DialogflowProjectsLocationsListRequest) -> operations.DialogflowProjectsLocationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}/locations", request.path_params)
        
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

    
    
    def dialogflow_projects_locations_set_agent(self, request: operations.DialogflowProjectsLocationsSetAgentRequest) -> operations.DialogflowProjectsLocationsSetAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSetAgentResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Agent])
                res.google_cloud_dialogflow_v2beta1_agent = out

        return res

    
    
    def dialogflow_projects_operations_cancel(self, request: operations.DialogflowProjectsOperationsCancelRequest) -> operations.DialogflowProjectsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2beta1/{name}:cancel", request.path_params)
        
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
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
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
        url = utils.generate_url(base_url, "/v2beta1/{name}/operations", request.path_params)
        
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

    