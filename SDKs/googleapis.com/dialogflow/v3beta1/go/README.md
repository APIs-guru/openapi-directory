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
    
    req := operations.DialogflowProjectsLocationsAgentsChangelogsListRequest{
        Security: operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity{
            Option1: &operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.DialogflowProjectsLocationsAgentsChangelogsListPathParams{
            Parent: "qui",
        },
        QueryParams: operations.DialogflowProjectsLocationsAgentsChangelogsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "rerum",
            Alt: "json",
            Callback: "officia",
            Fields: "est",
            Filter: "quis",
            Key: "atque",
            OauthToken: "facilis",
            PageSize: 7780772803056128328,
            PageToken: "ad",
            PrettyPrint: false,
            QuotaUser: "inventore",
            UploadType: "voluptates",
            UploadProtocol: "sit",
        },
    }
    
    res, err := s.Projects.DialogflowProjectsLocationsAgentsChangelogsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDialogflowCxV3beta1ListChangelogsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `DialogflowProjectsLocationsAgentsChangelogsList` - Returns the list of Changelogs.
* `DialogflowProjectsLocationsAgentsCreate` - Creates an agent in the specified location. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList` - Fetches a list of continuous test results for a given environment.
* `DialogflowProjectsLocationsAgentsEnvironmentsCreate` - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
* `DialogflowProjectsLocationsAgentsEnvironmentsDeployFlow` - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
* `DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList` - Returns the list of all deployments in the specified Environment.
* `DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate` - Creates an Experiment in the specified Environment.
* `DialogflowProjectsLocationsAgentsEnvironmentsExperimentsList` - Returns the list of all experiments in the specified Environment.
* `DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart` - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
* `DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop` - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
* `DialogflowProjectsLocationsAgentsEnvironmentsList` - Returns the list of all environments in the specified Agent.
* `DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory` - Looks up the history of the specified Environment.
* `DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest` - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
* `DialogflowProjectsLocationsAgentsFlowsCreate` - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsFlowsExport` - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
* `DialogflowProjectsLocationsAgentsFlowsImport` - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsFlowsList` - Returns the list of all flows in the specified agent.
* `DialogflowProjectsLocationsAgentsFlowsPagesCreate` - Creates a page in the specified flow.
* `DialogflowProjectsLocationsAgentsFlowsPagesList` - Returns the list of all pages in the specified flow.
* `DialogflowProjectsLocationsAgentsFlowsTrain` - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate` - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList` - Returns the list of all transition route groups in the specified flow.
* `DialogflowProjectsLocationsAgentsFlowsValidate` - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
* `DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions` - Compares the specified base version with target version.
* `DialogflowProjectsLocationsAgentsFlowsVersionsCreate` - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
* `DialogflowProjectsLocationsAgentsFlowsVersionsList` - Returns the list of all versions in the specified Flow.
* `DialogflowProjectsLocationsAgentsFlowsVersionsLoad` - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `DialogflowProjectsLocationsAgentsIntentsCreate` - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsIntentsList` - Returns the list of all intents in the specified agent.
* `DialogflowProjectsLocationsAgentsList` - Returns the list of all agents in the specified location.
* `DialogflowProjectsLocationsAgentsRestore` - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `DialogflowProjectsLocationsAgentsSessionsDetectIntent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
* `DialogflowProjectsLocationsAgentsSessionsEntityTypesCreate` - Creates a session entity type.
* `DialogflowProjectsLocationsAgentsSessionsEntityTypesList` - Returns the list of all session entity types in the specified session.
* `DialogflowProjectsLocationsAgentsSessionsFulfillIntent` - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
* `DialogflowProjectsLocationsAgentsSessionsMatchIntent` - Returns preliminary intent match results, doesn't change the session status.
* `DialogflowProjectsLocationsAgentsTestCasesBatchDelete` - Batch deletes test cases.
* `DialogflowProjectsLocationsAgentsTestCasesBatchRun` - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
* `DialogflowProjectsLocationsAgentsTestCasesCalculateCoverage` - Calculates the test coverage for an agent.
* `DialogflowProjectsLocationsAgentsTestCasesCreate` - Creates a test case for the given agent.
* `DialogflowProjectsLocationsAgentsTestCasesExport` - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
* `DialogflowProjectsLocationsAgentsTestCasesImport` - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
* `DialogflowProjectsLocationsAgentsTestCasesList` - Fetches a list of test cases for a given agent.
* `DialogflowProjectsLocationsAgentsTestCasesResultsList` - Fetches a list of results for a given test case.
* `DialogflowProjectsLocationsAgentsTestCasesRun` - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
* `DialogflowProjectsLocationsAgentsWebhooksCreate` - Creates a webhook in the specified agent.
* `DialogflowProjectsLocationsAgentsWebhooksList` - Returns the list of all webhooks in the specified agent.
* `DialogflowProjectsLocationsList` - Lists information about the supported locations for this service.
* `DialogflowProjectsLocationsSecuritySettingsCreate` - Create security settings in the specified location.
* `DialogflowProjectsLocationsSecuritySettingsDelete` - Deletes the specified SecuritySettings.
* `DialogflowProjectsLocationsSecuritySettingsList` - Returns the list of all security settings in the specified location.
* `DialogflowProjectsLocationsSecuritySettingsPatch` - Updates the specified SecuritySettings.
* `DialogflowProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `DialogflowProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `DialogflowProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
