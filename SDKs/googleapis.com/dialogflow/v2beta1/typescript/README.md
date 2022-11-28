# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest, DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    parent: "non",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "velit",
    alt: "json",
    callback: "aperiam",
    fields: "blanditiis",
    key: "amet",
    oauthToken: "iure",
    prettyPrint: true,
    quotaUser: "recusandae",
    uploadType: "quas",
    uploadProtocol: "nisi",
  },
  request: {
    contextSize: 5881637186895531495,
    latestMessage: "qui",
  },
};

sdk.projects.dialogflowProjectsConversationsParticipantsSuggestionsCompile(req).then((res: DialogflowProjectsConversationsParticipantsSuggestionsCompileResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dialogflowProjectsConversationsParticipantsSuggestionsCompile` - Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* `dialogflowProjectsConversationsParticipantsSuggestionsList` - Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* `dialogflowProjectsLocationsAgentEntityTypesBatchDelete` - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentEntityTypesBatchUpdate` - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate` - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete` - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate` - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflowProjectsLocationsAgentEnvironmentsCreate` - Creates an agent environment.
* `dialogflowProjectsLocationsAgentEnvironmentsGetHistory` - Gets the history of the specified environment.
* `dialogflowProjectsLocationsAgentEnvironmentsList` - Returns the list of all non-draft environments of the specified agent.
* `dialogflowProjectsLocationsAgentExport` - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
* `dialogflowProjectsLocationsAgentGetValidationResult` - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
* `dialogflowProjectsLocationsAgentImport` - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentIntentsBatchDelete` - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentIntentsBatchUpdate` - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentIntentsCreate` - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentIntentsList` - Returns the list of all intents in the specified agent.
* `dialogflowProjectsLocationsAgentRestore` - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentSearch` - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
* `dialogflowProjectsLocationsAgentSessionsContextsCreate` - Creates a context. If the specified context already exists, overrides the context.
* `dialogflowProjectsLocationsAgentSessionsContextsList` - Returns the list of all contexts in the specified session.
* `dialogflowProjectsLocationsAgentSessionsDeleteContexts` - Deletes all active contexts in the specified session.
* `dialogflowProjectsLocationsAgentSessionsDetectIntent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `dialogflowProjectsLocationsAgentSessionsEntityTypesCreate` - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `dialogflowProjectsLocationsAgentSessionsEntityTypesList` - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `dialogflowProjectsLocationsAgentTrain` - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsLocationsAgentVersionsCreate` - Creates an agent version. The new version points to the agent instance in the "default" environment.
* `dialogflowProjectsLocationsAgentVersionsList` - Returns the list of all versions of the specified agent.
* `dialogflowProjectsLocationsAnswerRecordsList` - Returns the list of all answer records in the specified project in reverse chronological order.
* `dialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig` - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* `dialogflowProjectsLocationsConversationProfilesCreate` - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* `dialogflowProjectsLocationsConversationProfilesList` - Returns the list of all conversation profiles in the specified project.
* `dialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig` - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* `dialogflowProjectsLocationsConversationsComplete` - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* `dialogflowProjectsLocationsConversationsCreate` - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* `dialogflowProjectsLocationsConversationsList` - Returns the list of all conversations in the specified project.
* `dialogflowProjectsLocationsConversationsMessagesBatchCreate` - Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
* `dialogflowProjectsLocationsConversationsMessagesList` - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* `dialogflowProjectsLocationsConversationsParticipantsAnalyzeContent` - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `dialogflowProjectsLocationsConversationsParticipantsCreate` - Creates a new participant in a conversation.
* `dialogflowProjectsLocationsConversationsParticipantsList` - Returns the list of all participants in the specified conversation.
* `dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles` - Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
* `dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers` - Gets suggested faq answers for a participant based on specific historical messages.
* `dialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies` - Gets smart replies for a participant based on specific historical messages.
* `dialogflowProjectsLocationsConversationsSuggestionsSuggestConversationSummary` - Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
* `dialogflowProjectsLocationsDeleteAgent` - Deletes the specified agent.
* `dialogflowProjectsLocationsGetAgent` - Retrieves the specified agent.
* `dialogflowProjectsLocationsKnowledgeBasesCreate` - Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsCreate` - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsDelete` - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsImport` - Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsList` - Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsPatch` - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflowProjectsLocationsKnowledgeBasesDocumentsReload` - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `dialogflowProjectsLocationsKnowledgeBasesList` - Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
* `dialogflowProjectsLocationsList` - Lists information about the supported locations for this service.
* `dialogflowProjectsLocationsSetAgent` - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `dialogflowProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `dialogflowProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dialogflowProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
