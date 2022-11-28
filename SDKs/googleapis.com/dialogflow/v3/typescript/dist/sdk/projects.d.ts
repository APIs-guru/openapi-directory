import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dialogflowProjectsLocationsAgentsChangelogsList - Returns the list of Changelogs.
    **/
    dialogflowProjectsLocationsAgentsChangelogsList(req: operations.DialogflowProjectsLocationsAgentsChangelogsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsChangelogsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsCreate - Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsCreate(req: operations.DialogflowProjectsLocationsAgentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList - Fetches a list of continuous test results for a given environment.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsContinuousTestResultsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsCreate - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsCreate(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsDeployFlow(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList - Returns the list of all deployments in the specified Environment.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsDeploymentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsDeploymentsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate - Creates an Experiment in the specified Environment.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreate(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList - Returns the list of all experiments in the specified Environment.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStart(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsExperimentsStop(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsList - Returns the list of all environments in the specified Agent.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsList(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory - Looks up the history of the specified Environment.
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistory(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsLookupEnvironmentHistoryResponse>;
    /**
     * dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
    **/
    dialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTest(req: operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsCreate - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsFlowsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsExport - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
    **/
    dialogflowProjectsLocationsAgentsFlowsExport(req: operations.DialogflowProjectsLocationsAgentsFlowsExportRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsExportResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsImport - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsFlowsImport(req: operations.DialogflowProjectsLocationsAgentsFlowsImportRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsImportResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsList - Returns the list of all flows in the specified agent.
    **/
    dialogflowProjectsLocationsAgentsFlowsList(req: operations.DialogflowProjectsLocationsAgentsFlowsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsPagesCreate - Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsFlowsPagesCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsPagesCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsPagesList - Returns the list of all pages in the specified flow.
    **/
    dialogflowProjectsLocationsAgentsFlowsPagesList(req: operations.DialogflowProjectsLocationsAgentsFlowsPagesListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsPagesListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsTrain - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsFlowsTrain(req: operations.DialogflowProjectsLocationsAgentsFlowsTrainRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTrainResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList - Returns the list of all transition route groups in the specified flow.
    **/
    dialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsList(req: operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsTransitionRouteGroupsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsValidate - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
    **/
    dialogflowProjectsLocationsAgentsFlowsValidate(req: operations.DialogflowProjectsLocationsAgentsFlowsValidateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsValidateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions - Compares the specified base version with target version.
    **/
    dialogflowProjectsLocationsAgentsFlowsVersionsCompareVersions(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsVersionsCreate - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
    **/
    dialogflowProjectsLocationsAgentsFlowsVersionsCreate(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsVersionsList - Returns the list of all versions in the specified Flow.
    **/
    dialogflowProjectsLocationsAgentsFlowsVersionsList(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsFlowsVersionsLoad - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
    **/
    dialogflowProjectsLocationsAgentsFlowsVersionsLoad(req: operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse>;
    /**
     * dialogflowProjectsLocationsAgentsIntentsCreate - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsIntentsCreate(req: operations.DialogflowProjectsLocationsAgentsIntentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsIntentsCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsIntentsList - Returns the list of all intents in the specified agent.
    **/
    dialogflowProjectsLocationsAgentsIntentsList(req: operations.DialogflowProjectsLocationsAgentsIntentsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsIntentsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsList - Returns the list of all agents in the specified location.
    **/
    dialogflowProjectsLocationsAgentsList(req: operations.DialogflowProjectsLocationsAgentsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsRestore - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
    **/
    dialogflowProjectsLocationsAgentsRestore(req: operations.DialogflowProjectsLocationsAgentsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsRestoreResponse>;
    /**
     * dialogflowProjectsLocationsAgentsSessionsDetectIntent - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
    **/
    dialogflowProjectsLocationsAgentsSessionsDetectIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsDetectIntentResponse>;
    /**
     * dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate - Creates a session entity type.
    **/
    dialogflowProjectsLocationsAgentsSessionsEntityTypesCreate(req: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsSessionsEntityTypesList - Returns the list of all session entity types in the specified session.
    **/
    dialogflowProjectsLocationsAgentsSessionsEntityTypesList(req: operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsEntityTypesListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsSessionsFulfillIntent - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
    **/
    dialogflowProjectsLocationsAgentsSessionsFulfillIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsFulfillIntentResponse>;
    /**
     * dialogflowProjectsLocationsAgentsSessionsMatchIntent - Returns preliminary intent match results, doesn't change the session status.
    **/
    dialogflowProjectsLocationsAgentsSessionsMatchIntent(req: operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsSessionsMatchIntentResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesBatchDelete - Batch deletes test cases.
    **/
    dialogflowProjectsLocationsAgentsTestCasesBatchDelete(req: operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesBatchRun - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
    **/
    dialogflowProjectsLocationsAgentsTestCasesBatchRun(req: operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage - Calculates the test coverage for an agent.
    **/
    dialogflowProjectsLocationsAgentsTestCasesCalculateCoverage(req: operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesCalculateCoverageResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesCreate - Creates a test case for the given agent.
    **/
    dialogflowProjectsLocationsAgentsTestCasesCreate(req: operations.DialogflowProjectsLocationsAgentsTestCasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesExport - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
    **/
    dialogflowProjectsLocationsAgentsTestCasesExport(req: operations.DialogflowProjectsLocationsAgentsTestCasesExportRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesExportResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesImport - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
    **/
    dialogflowProjectsLocationsAgentsTestCasesImport(req: operations.DialogflowProjectsLocationsAgentsTestCasesImportRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesImportResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesList - Fetches a list of test cases for a given agent.
    **/
    dialogflowProjectsLocationsAgentsTestCasesList(req: operations.DialogflowProjectsLocationsAgentsTestCasesListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesResultsList - Fetches a list of results for a given test case.
    **/
    dialogflowProjectsLocationsAgentsTestCasesResultsList(req: operations.DialogflowProjectsLocationsAgentsTestCasesResultsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesResultsListResponse>;
    /**
     * dialogflowProjectsLocationsAgentsTestCasesRun - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
    **/
    dialogflowProjectsLocationsAgentsTestCasesRun(req: operations.DialogflowProjectsLocationsAgentsTestCasesRunRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsTestCasesRunResponse>;
    /**
     * dialogflowProjectsLocationsAgentsWebhooksCreate - Creates a webhook in the specified agent.
    **/
    dialogflowProjectsLocationsAgentsWebhooksCreate(req: operations.DialogflowProjectsLocationsAgentsWebhooksCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsWebhooksCreateResponse>;
    /**
     * dialogflowProjectsLocationsAgentsWebhooksList - Returns the list of all webhooks in the specified agent.
    **/
    dialogflowProjectsLocationsAgentsWebhooksList(req: operations.DialogflowProjectsLocationsAgentsWebhooksListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsAgentsWebhooksListResponse>;
    /**
     * dialogflowProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    dialogflowProjectsLocationsList(req: operations.DialogflowProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsListResponse>;
    /**
     * dialogflowProjectsLocationsSecuritySettingsCreate - Create security settings in the specified location.
    **/
    dialogflowProjectsLocationsSecuritySettingsCreate(req: operations.DialogflowProjectsLocationsSecuritySettingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsCreateResponse>;
    /**
     * dialogflowProjectsLocationsSecuritySettingsDelete - Deletes the specified SecuritySettings.
    **/
    dialogflowProjectsLocationsSecuritySettingsDelete(req: operations.DialogflowProjectsLocationsSecuritySettingsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsDeleteResponse>;
    /**
     * dialogflowProjectsLocationsSecuritySettingsList - Returns the list of all security settings in the specified location.
    **/
    dialogflowProjectsLocationsSecuritySettingsList(req: operations.DialogflowProjectsLocationsSecuritySettingsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsListResponse>;
    /**
     * dialogflowProjectsLocationsSecuritySettingsPatch - Updates the specified SecuritySettings.
    **/
    dialogflowProjectsLocationsSecuritySettingsPatch(req: operations.DialogflowProjectsLocationsSecuritySettingsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsLocationsSecuritySettingsPatchResponse>;
    /**
     * dialogflowProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    dialogflowProjectsOperationsCancel(req: operations.DialogflowProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsCancelResponse>;
    /**
     * dialogflowProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    dialogflowProjectsOperationsGet(req: operations.DialogflowProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsGetResponse>;
    /**
     * dialogflowProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    dialogflowProjectsOperationsList(req: operations.DialogflowProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DialogflowProjectsOperationsListResponse>;
}
