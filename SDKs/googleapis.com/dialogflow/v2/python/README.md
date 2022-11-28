# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest(
    security=operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity(
        option1=operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams(
        parent="voluptatibus",
    ),
    query_params=operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams(
        dollar_xgafv="2",
        access_token="illo",
        alt="proto",
        callback="amet",
        fields="et",
        key="ipsam",
        oauth_token="nobis",
        pretty_print=False,
        quota_user="animi",
        upload_type="tempora",
        upload_protocol="maxime",
    ),
    request=shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest(
        entity_type_names=[
            "enim",
        ],
    ),
)
    
res = s.projects.dialogflow_projects_locations_agent_entity_types_batch_delete(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dialogflow_projects_locations_agent_entity_types_batch_delete` - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_entity_types_batch_update` - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_entity_types_entities_batch_create` - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_entity_types_entities_batch_delete` - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_entity_types_entities_batch_update` - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 
* `dialogflow_projects_locations_agent_environments_create` - Creates an agent environment.
* `dialogflow_projects_locations_agent_environments_get_history` - Gets the history of the specified environment.
* `dialogflow_projects_locations_agent_environments_list` - Returns the list of all non-default environments of the specified agent.
* `dialogflow_projects_locations_agent_export` - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
* `dialogflow_projects_locations_agent_get_validation_result` - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
* `dialogflow_projects_locations_agent_import` - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_intents_batch_delete` - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_intents_batch_update` - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_intents_create` - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_intents_list` - Returns the list of all intents in the specified agent.
* `dialogflow_projects_locations_agent_restore` - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_search` - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
* `dialogflow_projects_locations_agent_sessions_contexts_create` - Creates a context. If the specified context already exists, overrides the context.
* `dialogflow_projects_locations_agent_sessions_contexts_list` - Returns the list of all contexts in the specified session.
* `dialogflow_projects_locations_agent_sessions_delete_contexts` - Deletes all active contexts in the specified session.
* `dialogflow_projects_locations_agent_sessions_detect_intent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `dialogflow_projects_locations_agent_sessions_entity_types_create` - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `dialogflow_projects_locations_agent_sessions_entity_types_list` - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `dialogflow_projects_locations_agent_train` - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_locations_agent_versions_create` - Creates an agent version. The new version points to the agent instance in the "default" environment.
* `dialogflow_projects_locations_agent_versions_list` - Returns the list of all versions of the specified agent.
* `dialogflow_projects_locations_answer_records_list` - Returns the list of all answer records in the specified project in reverse chronological order.
* `dialogflow_projects_locations_conversation_datasets_create` - Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
* `dialogflow_projects_locations_conversation_datasets_import_conversation_data` - Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
* `dialogflow_projects_locations_conversation_datasets_list` - Returns the list of all conversation datasets in the specified project and location.
* `dialogflow_projects_locations_conversation_models_create` - Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
* `dialogflow_projects_locations_conversation_models_deploy` - Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflow_projects_locations_conversation_models_evaluations_create` - Creates evaluation of a conversation model.
* `dialogflow_projects_locations_conversation_models_evaluations_list` - Lists evaluations of a conversation model.
* `dialogflow_projects_locations_conversation_models_list` - Lists conversation models.
* `dialogflow_projects_locations_conversation_models_undeploy` - Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflow_projects_locations_conversation_profiles_clear_suggestion_feature_config` - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* `dialogflow_projects_locations_conversation_profiles_create` - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* `dialogflow_projects_locations_conversation_profiles_list` - Returns the list of all conversation profiles in the specified project.
* `dialogflow_projects_locations_conversation_profiles_set_suggestion_feature_config` - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* `dialogflow_projects_locations_conversations_complete` - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* `dialogflow_projects_locations_conversations_create` - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* `dialogflow_projects_locations_conversations_list` - Returns the list of all conversations in the specified project.
* `dialogflow_projects_locations_conversations_messages_list` - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* `dialogflow_projects_locations_conversations_participants_analyze_content` - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `dialogflow_projects_locations_conversations_participants_create` - Creates a new participant in a conversation.
* `dialogflow_projects_locations_conversations_participants_list` - Returns the list of all participants in the specified conversation.
* `dialogflow_projects_locations_conversations_participants_suggestions_suggest_articles` - Gets suggested articles for a participant based on specific historical messages.
* `dialogflow_projects_locations_conversations_participants_suggestions_suggest_faq_answers` - Gets suggested faq answers for a participant based on specific historical messages.
* `dialogflow_projects_locations_conversations_participants_suggestions_suggest_smart_replies` - Gets smart replies for a participant based on specific historical messages.
* `dialogflow_projects_locations_delete_agent` - Deletes the specified agent.
* `dialogflow_projects_locations_get_agent` - Retrieves the specified agent.
* `dialogflow_projects_locations_knowledge_bases_create` - Creates a knowledge base.
* `dialogflow_projects_locations_knowledge_bases_documents_create` - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `dialogflow_projects_locations_knowledge_bases_documents_delete` - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflow_projects_locations_knowledge_bases_documents_export` - Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `dialogflow_projects_locations_knowledge_bases_documents_import` - Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* `dialogflow_projects_locations_knowledge_bases_documents_list` - Returns the list of all documents of the knowledge base.
* `dialogflow_projects_locations_knowledge_bases_documents_patch` - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `dialogflow_projects_locations_knowledge_bases_documents_reload` - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflow_projects_locations_knowledge_bases_list` - Returns the list of all knowledge bases of the specified agent.
* `dialogflow_projects_locations_list` - Lists information about the supported locations for this service.
* `dialogflow_projects_locations_set_agent` - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflow_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `dialogflow_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dialogflow_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
