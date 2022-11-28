# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest{
        Security: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity{
            Option1: &operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeletePathParams{
            Parent: "voluptatibus",
        },
        QueryParams: operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteQueryParams{
            DollarXgafv: "2",
            AccessToken: "illo",
            Alt: "proto",
            Callback: "amet",
            Fields: "et",
            Key: "ipsam",
            OauthToken: "nobis",
            PrettyPrint: false,
            QuotaUser: "animi",
            UploadType: "tempora",
            UploadProtocol: "maxime",
        },
        Request: &shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest{
            EntityTypeNames: []string{
                "enim",
            },
        },
    }
    
    res, err := s.Projects.DialogflowProjectsLocationsAgentEntityTypesBatchDelete(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleLongrunningOperation != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DialogflowProjectsLocationsAgentEntityTypesBatchDelete` - Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentEntityTypesBatchUpdate` - Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchCreate` - Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchDelete` - Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentEntityTypesEntitiesBatchUpdate` - Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 
* `DialogflowProjectsLocationsAgentEnvironmentsCreate` - Creates an agent environment.
* `DialogflowProjectsLocationsAgentEnvironmentsGetHistory` - Gets the history of the specified environment.
* `DialogflowProjectsLocationsAgentEnvironmentsList` - Returns the list of all non-default environments of the specified agent.
* `DialogflowProjectsLocationsAgentExport` - Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
* `DialogflowProjectsLocationsAgentGetValidationResult` - Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
* `DialogflowProjectsLocationsAgentImport` - Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentIntentsBatchDelete` - Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentIntentsBatchUpdate` - Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentIntentsCreate` - Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentIntentsList` - Returns the list of all intents in the specified agent.
* `DialogflowProjectsLocationsAgentRestore` - Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentSearch` - Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
* `DialogflowProjectsLocationsAgentSessionsContextsCreate` - Creates a context. If the specified context already exists, overrides the context.
* `DialogflowProjectsLocationsAgentSessionsContextsList` - Returns the list of all contexts in the specified session.
* `DialogflowProjectsLocationsAgentSessionsDeleteContexts` - Deletes all active contexts in the specified session.
* `DialogflowProjectsLocationsAgentSessionsDetectIntent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `DialogflowProjectsLocationsAgentSessionsEntityTypesCreate` - Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `DialogflowProjectsLocationsAgentSessionsEntityTypesList` - Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
* `DialogflowProjectsLocationsAgentTrain` - Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsLocationsAgentVersionsCreate` - Creates an agent version. The new version points to the agent instance in the "default" environment.
* `DialogflowProjectsLocationsAgentVersionsList` - Returns the list of all versions of the specified agent.
* `DialogflowProjectsLocationsAnswerRecordsList` - Returns the list of all answer records in the specified project in reverse chronological order.
* `DialogflowProjectsLocationsConversationDatasetsCreate` - Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
* `DialogflowProjectsLocationsConversationDatasetsImportConversationData` - Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
* `DialogflowProjectsLocationsConversationDatasetsList` - Returns the list of all conversation datasets in the specified project and location.
* `DialogflowProjectsLocationsConversationModelsCreate` - Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
* `DialogflowProjectsLocationsConversationModelsDeploy` - Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `DialogflowProjectsLocationsConversationModelsEvaluationsCreate` - Creates evaluation of a conversation model.
* `DialogflowProjectsLocationsConversationModelsEvaluationsList` - Lists evaluations of a conversation model.
* `DialogflowProjectsLocationsConversationModelsList` - Lists conversation models.
* `DialogflowProjectsLocationsConversationModelsUndeploy` - Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `DialogflowProjectsLocationsConversationProfilesClearSuggestionFeatureConfig` - Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
* `DialogflowProjectsLocationsConversationProfilesCreate` - Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
* `DialogflowProjectsLocationsConversationProfilesList` - Returns the list of all conversation profiles in the specified project.
* `DialogflowProjectsLocationsConversationProfilesSetSuggestionFeatureConfig` - Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
* `DialogflowProjectsLocationsConversationsComplete` - Completes the specified conversation. Finished conversations are purged from the database after 30 days.
* `DialogflowProjectsLocationsConversationsCreate` - Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
* `DialogflowProjectsLocationsConversationsList` - Returns the list of all conversations in the specified project.
* `DialogflowProjectsLocationsConversationsMessagesList` - Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
* `DialogflowProjectsLocationsConversationsParticipantsAnalyzeContent` - Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
* `DialogflowProjectsLocationsConversationsParticipantsCreate` - Creates a new participant in a conversation.
* `DialogflowProjectsLocationsConversationsParticipantsList` - Returns the list of all participants in the specified conversation.
* `DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestArticles` - Gets suggested articles for a participant based on specific historical messages.
* `DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestFaqAnswers` - Gets suggested faq answers for a participant based on specific historical messages.
* `DialogflowProjectsLocationsConversationsParticipantsSuggestionsSuggestSmartReplies` - Gets smart replies for a participant based on specific historical messages.
* `DialogflowProjectsLocationsDeleteAgent` - Deletes the specified agent.
* `DialogflowProjectsLocationsGetAgent` - Retrieves the specified agent.
* `DialogflowProjectsLocationsKnowledgeBasesCreate` - Creates a knowledge base.
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsCreate` - Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsDelete` - Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsExport` - Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsImport` - Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsList` - Returns the list of all documents of the knowledge base.
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsPatch` - Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
* `DialogflowProjectsLocationsKnowledgeBasesDocumentsReload` - Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
* `DialogflowProjectsLocationsKnowledgeBasesList` - Returns the list of all knowledge bases of the specified agent.
* `DialogflowProjectsLocationsList` - Lists information about the supported locations for this service.
* `DialogflowProjectsLocationsSetAgent` - Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
* `DialogflowProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DialogflowProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DialogflowProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
