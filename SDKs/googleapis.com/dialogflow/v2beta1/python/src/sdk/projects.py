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

    
    def dialogflow_projects_conversations_participants_suggestions_compile(self, request: operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest) -> operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse:
        r"""Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:compile", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1CompileSuggestionResponse])
                res.google_cloud_dialogflow_v2beta1_compile_suggestion_response = out

        return res

    
    def dialogflow_projects_conversations_participants_suggestions_list(self, request: operations.DialogflowProjectsConversationsParticipantsSuggestionsListRequest) -> operations.DialogflowProjectsConversationsParticipantsSuggestionsListResponse:
        r"""Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsConversationsParticipantsSuggestionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListSuggestionsResponse])
                res.google_cloud_dialogflow_v2beta1_list_suggestions_response = out

        return res

    
    def dialogflow_projects_locations_agent_entity_types_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse:
        r"""Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_entity_types_batch_update(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse:
        r"""Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_create(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse:
        r"""Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse:
        r"""Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_entity_types_entities_batch_update(self, request: operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse:
        r"""Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entities:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_environments_create(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse:
        r"""Creates an agent environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/environments", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Environment])
                res.google_cloud_dialogflow_v2beta1_environment = out

        return res

    
    def dialogflow_projects_locations_agent_environments_get_history(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse:
        r"""Gets the history of the specified environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsGetHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1EnvironmentHistory])
                res.google_cloud_dialogflow_v2beta1_environment_history = out

        return res

    
    def dialogflow_projects_locations_agent_environments_list(self, request: operations.DialogflowProjectsLocationsAgentEnvironmentsListRequest) -> operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse:
        r"""Returns the list of all non-draft environments of the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/environments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentEnvironmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListEnvironmentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_environments_response = out

        return res

    
    def dialogflow_projects_locations_agent_export(self, request: operations.DialogflowProjectsLocationsAgentExportRequest) -> operations.DialogflowProjectsLocationsAgentExportResponse:
        r"""Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:export", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentExportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_get_validation_result(self, request: operations.DialogflowProjectsLocationsAgentGetValidationResultRequest) -> operations.DialogflowProjectsLocationsAgentGetValidationResultResponse:
        r"""Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent/validationResult", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentGetValidationResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ValidationResult])
                res.google_cloud_dialogflow_v2beta1_validation_result = out

        return res

    
    def dialogflow_projects_locations_agent_import(self, request: operations.DialogflowProjectsLocationsAgentImportRequest) -> operations.DialogflowProjectsLocationsAgentImportResponse:
        r"""Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_intents_batch_delete(self, request: operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteRequest) -> operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse:
        r"""Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_intents_batch_update(self, request: operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateRequest) -> operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse:
        r"""Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_intents_create(self, request: operations.DialogflowProjectsLocationsAgentIntentsCreateRequest) -> operations.DialogflowProjectsLocationsAgentIntentsCreateResponse:
        r"""Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Intent])
                res.google_cloud_dialogflow_v2beta1_intent = out

        return res

    
    def dialogflow_projects_locations_agent_intents_list(self, request: operations.DialogflowProjectsLocationsAgentIntentsListRequest) -> operations.DialogflowProjectsLocationsAgentIntentsListResponse:
        r"""Returns the list of all intents in the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/intents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentIntentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListIntentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_intents_response = out

        return res

    
    def dialogflow_projects_locations_agent_restore(self, request: operations.DialogflowProjectsLocationsAgentRestoreRequest) -> operations.DialogflowProjectsLocationsAgentRestoreResponse:
        r"""Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_search(self, request: operations.DialogflowProjectsLocationsAgentSearchRequest) -> operations.DialogflowProjectsLocationsAgentSearchResponse:
        r"""Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id \"-\". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SearchAgentsResponse])
                res.google_cloud_dialogflow_v2beta1_search_agents_response = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_contexts_create(self, request: operations.DialogflowProjectsLocationsAgentSessionsContextsCreateRequest) -> operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse:
        r"""Creates a context. If the specified context already exists, overrides the context.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsContextsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Context])
                res.google_cloud_dialogflow_v2beta1_context = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_contexts_list(self, request: operations.DialogflowProjectsLocationsAgentSessionsContextsListRequest) -> operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse:
        r"""Returns the list of all contexts in the specified session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsContextsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListContextsResponse])
                res.google_cloud_dialogflow_v2beta1_list_contexts_response = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_delete_contexts(self, request: operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsRequest) -> operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse:
        r"""Deletes all active contexts in the specified session.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/contexts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsDeleteContextsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_detect_intent(self, request: operations.DialogflowProjectsLocationsAgentSessionsDetectIntentRequest) -> operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse:
        r"""Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{session}:detectIntent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsDetectIntentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1DetectIntentResponse])
                res.google_cloud_dialogflow_v2beta1_detect_intent_response = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_entity_types_create(self, request: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateRequest) -> operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse:
        r"""Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsEntityTypesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SessionEntityType])
                res.google_cloud_dialogflow_v2beta1_session_entity_type = out

        return res

    
    def dialogflow_projects_locations_agent_sessions_entity_types_list(self, request: operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListRequest) -> operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse:
        r"""Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/entityTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentSessionsEntityTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse])
                res.google_cloud_dialogflow_v2beta1_list_session_entity_types_response = out

        return res

    
    def dialogflow_projects_locations_agent_train(self, request: operations.DialogflowProjectsLocationsAgentTrainRequest) -> operations.DialogflowProjectsLocationsAgentTrainResponse:
        r"""Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent:train", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentTrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_agent_versions_create(self, request: operations.DialogflowProjectsLocationsAgentVersionsCreateRequest) -> operations.DialogflowProjectsLocationsAgentVersionsCreateResponse:
        r"""Creates an agent version. The new version points to the agent instance in the \"default\" environment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Version])
                res.google_cloud_dialogflow_v2beta1_version = out

        return res

    
    def dialogflow_projects_locations_agent_versions_list(self, request: operations.DialogflowProjectsLocationsAgentVersionsListRequest) -> operations.DialogflowProjectsLocationsAgentVersionsListResponse:
        r"""Returns the list of all versions of the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAgentVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListVersionsResponse])
                res.google_cloud_dialogflow_v2beta1_list_versions_response = out

        return res

    
    def dialogflow_projects_locations_answer_records_list(self, request: operations.DialogflowProjectsLocationsAnswerRecordsListRequest) -> operations.DialogflowProjectsLocationsAnswerRecordsListResponse:
        r"""Returns the list of all answer records in the specified project in reverse chronological order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/answerRecords", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsAnswerRecordsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListAnswerRecordsResponse])
                res.google_cloud_dialogflow_v2beta1_list_answer_records_response = out

        return res

    
    def dialogflow_projects_locations_conversation_profiles_clear_suggestion_feature_config(self, request: operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigRequest) -> operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse:
        r"""Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{conversationProfile}:clearSuggestionFeatureConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_conversation_profiles_create(self, request: operations.DialogflowProjectsLocationsConversationProfilesCreateRequest) -> operations.DialogflowProjectsLocationsConversationProfilesCreateResponse:
        r"""Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversationProfiles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ConversationProfile])
                res.google_cloud_dialogflow_v2beta1_conversation_profile = out

        return res

    
    def dialogflow_projects_locations_conversation_profiles_list(self, request: operations.DialogflowProjectsLocationsConversationProfilesListRequest) -> operations.DialogflowProjectsLocationsConversationProfilesListResponse:
        r"""Returns the list of all conversation profiles in the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversationProfiles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListConversationProfilesResponse])
                res.google_cloud_dialogflow_v2beta1_list_conversation_profiles_response = out

        return res

    
    def dialogflow_projects_locations_conversation_profiles_set_suggestion_feature_config(self, request: operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigRequest) -> operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse:
        r"""Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{conversationProfile}:setSuggestionFeatureConfig", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_conversations_complete(self, request: operations.DialogflowProjectsLocationsConversationsCompleteRequest) -> operations.DialogflowProjectsLocationsConversationsCompleteResponse:
        r"""Completes the specified conversation. Finished conversations are purged from the database after 30 days.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}:complete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Conversation])
                res.google_cloud_dialogflow_v2beta1_conversation = out

        return res

    
    def dialogflow_projects_locations_conversations_create(self, request: operations.DialogflowProjectsLocationsConversationsCreateRequest) -> operations.DialogflowProjectsLocationsConversationsCreateResponse:
        r"""Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Conversation])
                res.google_cloud_dialogflow_v2beta1_conversation = out

        return res

    
    def dialogflow_projects_locations_conversations_list(self, request: operations.DialogflowProjectsLocationsConversationsListRequest) -> operations.DialogflowProjectsLocationsConversationsListResponse:
        r"""Returns the list of all conversations in the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/conversations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListConversationsResponse])
                res.google_cloud_dialogflow_v2beta1_list_conversations_response = out

        return res

    
    def dialogflow_projects_locations_conversations_messages_batch_create(self, request: operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateRequest) -> operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse:
        r"""Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/messages:batchCreate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsMessagesBatchCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse])
                res.google_cloud_dialogflow_v2beta1_batch_create_messages_response = out

        return res

    
    def dialogflow_projects_locations_conversations_messages_list(self, request: operations.DialogflowProjectsLocationsConversationsMessagesListRequest) -> operations.DialogflowProjectsLocationsConversationsMessagesListResponse:
        r"""Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsMessagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListMessagesResponse])
                res.google_cloud_dialogflow_v2beta1_list_messages_response = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_analyze_content(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse:
        r"""Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{participant}:analyzeContent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsAnalyzeContentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1AnalyzeContentResponse])
                res.google_cloud_dialogflow_v2beta1_analyze_content_response = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_create(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsCreateRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse:
        r"""Creates a new participant in a conversation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/participants", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Participant])
                res.google_cloud_dialogflow_v2beta1_participant = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_list(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsListRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsListResponse:
        r"""Returns the list of all participants in the specified conversation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListParticipantsResponse])
                res.google_cloud_dialogflow_v2beta1_list_participants_response = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_articles(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse:
        r"""Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestArticles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticlesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestArticlesResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_articles_response = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_faq_answers(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse:
        r"""Gets suggested faq answers for a participant based on specific historical messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestFaqAnswers", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestFaqAnswersResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_faq_answers_response = out

        return res

    
    def dialogflow_projects_locations_conversations_participants_suggestions_suggest_smart_replies(self, request: operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesRequest) -> operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse:
        r"""Gets smart replies for a participant based on specific historical messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/suggestions:suggestSmartReplies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartRepliesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestSmartRepliesResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_smart_replies_response = out

        return res

    
    def dialogflow_projects_locations_conversations_suggestions_suggest_conversation_summary(self, request: operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryRequest) -> operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse:
        r"""Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{conversation}/suggestions:suggestConversationSummary", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1SuggestConversationSummaryResponse])
                res.google_cloud_dialogflow_v2beta1_suggest_conversation_summary_response = out

        return res

    
    def dialogflow_projects_locations_delete_agent(self, request: operations.DialogflowProjectsLocationsDeleteAgentRequest) -> operations.DialogflowProjectsLocationsDeleteAgentResponse:
        r"""Deletes the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsDeleteAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def dialogflow_projects_locations_get_agent(self, request: operations.DialogflowProjectsLocationsGetAgentRequest) -> operations.DialogflowProjectsLocationsGetAgentResponse:
        r"""Retrieves the specified agent.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsGetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Agent])
                res.google_cloud_dialogflow_v2beta1_agent = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_create(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesCreateRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse:
        r"""Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/knowledgeBases", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1KnowledgeBase])
                res.google_cloud_dialogflow_v2beta1_knowledge_base = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_create(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse:
        r"""Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_delete(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse:
        r"""Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_import(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse:
        r"""Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents:import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_list(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse:
        r"""Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/documents", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListDocumentsResponse])
                res.google_cloud_dialogflow_v2beta1_list_documents_response = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_patch(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse:
        r"""Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_documents_reload(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse:
        r"""Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}:reload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesDocumentsReloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def dialogflow_projects_locations_knowledge_bases_list(self, request: operations.DialogflowProjectsLocationsKnowledgeBasesListRequest) -> operations.DialogflowProjectsLocationsKnowledgeBasesListResponse:
        r"""Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/knowledgeBases", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsKnowledgeBasesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1ListKnowledgeBasesResponse])
                res.google_cloud_dialogflow_v2beta1_list_knowledge_bases_response = out

        return res

    
    def dialogflow_projects_locations_list(self, request: operations.DialogflowProjectsLocationsListRequest) -> operations.DialogflowProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}/locations", request.path_params)
        
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

    
    def dialogflow_projects_locations_set_agent(self, request: operations.DialogflowProjectsLocationsSetAgentRequest) -> operations.DialogflowProjectsLocationsSetAgentResponse:
        r"""Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{parent}/agent", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DialogflowProjectsLocationsSetAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDialogflowV2beta1Agent])
                res.google_cloud_dialogflow_v2beta1_agent = out

        return res

    
    def dialogflow_projects_operations_cancel(self, request: operations.DialogflowProjectsOperationsCancelRequest) -> operations.DialogflowProjectsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v2beta1/{name}:cancel", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v2beta1/{name}", request.path_params)
        
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
        
        url = utils.generate_url(base_url, "/v2beta1/{name}/operations", request.path_params)
        
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

    