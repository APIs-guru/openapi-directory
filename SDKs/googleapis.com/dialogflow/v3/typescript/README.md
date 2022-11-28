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
import { DialogflowProjectsLocationsAgentsChangelogsListRequest, DialogflowProjectsLocationsAgentsChangelogsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DialogflowProjectsLocationsAgentsChangelogsListRequest = {
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
    parent: "vel",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nulla",
    alt: "media",
    callback: "distinctio",
    fields: "vero",
    filter: "odit",
    key: "ullam",
    oauthToken: "aperiam",
    pageSize: 1549542529162307106,
    pageToken: "placeat",
    prettyPrint: true,
    quotaUser: "ut",
    uploadType: "id",
    uploadProtocol: "molestias",
  },
};

sdk.projects.dialogflowProjectsLocationsAgentsChangelogsList(req).then((res: DialogflowProjectsLocationsAgentsChangelogsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dialogflowProjectsLocationsAgentsChangelogsList` - Returns the list of Changelogs.
* `dialogflowProjectsLocationsAgentsCreate` - Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList` - Fetches a list of continuous test results for a given environment.
* `dialogflowProjectsLocationsAgentsEnvironmentsCreate` - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
* `dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow` - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
* `dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList` - Returns the list of all deployments in the specified Environment.
* `dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate` - Creates an Experiment in the specified Environment.
* `dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList` - Returns the list of all experiments in the specified Environment.
* `dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart` - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
* `dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop` - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
* `dialogflowProjectsLocationsAgentsEnvironmentsList` - Returns the list of all environments in the specified Agent.
* `dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory` - Looks up the history of the specified Environment.
* `dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest` - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
* `dialogflowProjectsLocationsAgentsFlowsCreate` - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsFlowsExport` - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
* `dialogflowProjectsLocationsAgentsFlowsImport` - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsFlowsList` - Returns the list of all flows in the specified agent.
* `dialogflowProjectsLocationsAgentsFlowsPagesCreate` - Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsFlowsPagesList` - Returns the list of all pages in the specified flow.
* `dialogflowProjectsLocationsAgentsFlowsTrain` - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate` - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList` - Returns the list of all transition route groups in the specified flow.
* `dialogflowProjectsLocationsAgentsFlowsValidate` - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
* `dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions` - Compares the specified base version with target version.
* `dialogflowProjectsLocationsAgentsFlowsVersionsCreate` - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
* `dialogflowProjectsLocationsAgentsFlowsVersionsList` - Returns the list of all versions in the specified Flow.
* `dialogflowProjectsLocationsAgentsFlowsVersionsLoad` - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflowProjectsLocationsAgentsIntentsCreate` - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsIntentsList` - Returns the list of all intents in the specified agent.
* `dialogflowProjectsLocationsAgentsList` - Returns the list of all agents in the specified location.
* `dialogflowProjectsLocationsAgentsRestore` - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflowProjectsLocationsAgentsSessionsDetectIntent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
* `dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate` - Creates a session entity type.
* `dialogflowProjectsLocationsAgentsSessionsEntityTypesList` - Returns the list of all session entity types in the specified session.
* `dialogflowProjectsLocationsAgentsSessionsFulfillIntent` - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
* `dialogflowProjectsLocationsAgentsSessionsMatchIntent` - Returns preliminary intent match results, doesn't change the session status.
* `dialogflowProjectsLocationsAgentsTestCasesBatchDelete` - Batch deletes test cases.
* `dialogflowProjectsLocationsAgentsTestCasesBatchRun` - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
* `dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage` - Calculates the test coverage for an agent.
* `dialogflowProjectsLocationsAgentsTestCasesCreate` - Creates a test case for the given agent.
* `dialogflowProjectsLocationsAgentsTestCasesExport` - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
* `dialogflowProjectsLocationsAgentsTestCasesImport` - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
* `dialogflowProjectsLocationsAgentsTestCasesList` - Fetches a list of test cases for a given agent.
* `dialogflowProjectsLocationsAgentsTestCasesResultsList` - Fetches a list of results for a given test case.
* `dialogflowProjectsLocationsAgentsTestCasesRun` - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
* `dialogflowProjectsLocationsAgentsWebhooksCreate` - Creates a webhook in the specified agent.
* `dialogflowProjectsLocationsAgentsWebhooksList` - Returns the list of all webhooks in the specified agent.
* `dialogflowProjectsLocationsList` - Lists information about the supported locations for this service.
* `dialogflowProjectsLocationsSecuritySettingsCreate` - Create security settings in the specified location.
* `dialogflowProjectsLocationsSecuritySettingsDelete` - Deletes the specified SecuritySettings.
* `dialogflowProjectsLocationsSecuritySettingsList` - Returns the list of all security settings in the specified location.
* `dialogflowProjectsLocationsSecuritySettingsPatch` - Updates the specified SecuritySettings.
* `dialogflowProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `dialogflowProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dialogflowProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
