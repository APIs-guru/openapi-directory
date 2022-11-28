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
    
req = operations.DialogflowProjectsLocationsAgentsChangelogsListRequest(
    security=operations.DialogflowProjectsLocationsAgentsChangelogsListSecurity(
        option1=operations.DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.DialogflowProjectsLocationsAgentsChangelogsListPathParams(
        parent="vel",
    ),
    query_params=operations.DialogflowProjectsLocationsAgentsChangelogsListQueryParams(
        dollar_xgafv="2",
        access_token="nulla",
        alt="media",
        callback="distinctio",
        fields="vero",
        filter="odit",
        key="ullam",
        oauth_token="aperiam",
        page_size=1549542529162307106,
        page_token="placeat",
        pretty_print=True,
        quota_user="ut",
        upload_type="id",
        upload_protocol="molestias",
    ),
)
    
res = s.projects.dialogflow_projects_locations_agents_changelogs_list(req)

if res.google_cloud_dialogflow_cx_v3_list_changelogs_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `dialogflow_projects_locations_agents_changelogs_list` - Returns the list of Changelogs.
* `dialogflow_projects_locations_agents_create` - Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_environments_continuous_test_results_list` - Fetches a list of continuous test results for a given environment.
* `dialogflow_projects_locations_agents_environments_create` - Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
* `dialogflow_projects_locations_agents_environments_deploy_flow` - Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
* `dialogflow_projects_locations_agents_environments_deployments_list` - Returns the list of all deployments in the specified Environment.
* `dialogflow_projects_locations_agents_environments_experiments_create` - Creates an Experiment in the specified Environment.
* `dialogflow_projects_locations_agents_environments_experiments_list` - Returns the list of all experiments in the specified Environment.
* `dialogflow_projects_locations_agents_environments_experiments_start` - Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
* `dialogflow_projects_locations_agents_environments_experiments_stop` - Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
* `dialogflow_projects_locations_agents_environments_list` - Returns the list of all environments in the specified Agent.
* `dialogflow_projects_locations_agents_environments_lookup_environment_history` - Looks up the history of the specified Environment.
* `dialogflow_projects_locations_agents_environments_run_continuous_test` - Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
* `dialogflow_projects_locations_agents_flows_create` - Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_flows_export` - Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
* `dialogflow_projects_locations_agents_flows_import` - Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_flows_list` - Returns the list of all flows in the specified agent.
* `dialogflow_projects_locations_agents_flows_pages_create` - Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_flows_pages_list` - Returns the list of all pages in the specified flow.
* `dialogflow_projects_locations_agents_flows_train` - Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_flows_transition_route_groups_create` - Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_flows_transition_route_groups_list` - Returns the list of all transition route groups in the specified flow.
* `dialogflow_projects_locations_agents_flows_validate` - Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
* `dialogflow_projects_locations_agents_flows_versions_compare_versions` - Compares the specified base version with target version.
* `dialogflow_projects_locations_agents_flows_versions_create` - Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
* `dialogflow_projects_locations_agents_flows_versions_list` - Returns the list of all versions in the specified Flow.
* `dialogflow_projects_locations_agents_flows_versions_load` - Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
* `dialogflow_projects_locations_agents_intents_create` - Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_intents_list` - Returns the list of all intents in the specified agent.
* `dialogflow_projects_locations_agents_list` - Returns the list of all agents in the specified location.
* `dialogflow_projects_locations_agents_restore` - Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
* `dialogflow_projects_locations_agents_sessions_detect_intent` - Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
* `dialogflow_projects_locations_agents_sessions_entity_types_create` - Creates a session entity type.
* `dialogflow_projects_locations_agents_sessions_entity_types_list` - Returns the list of all session entity types in the specified session.
* `dialogflow_projects_locations_agents_sessions_fulfill_intent` - Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
* `dialogflow_projects_locations_agents_sessions_match_intent` - Returns preliminary intent match results, doesn't change the session status.
* `dialogflow_projects_locations_agents_test_cases_batch_delete` - Batch deletes test cases.
* `dialogflow_projects_locations_agents_test_cases_batch_run` - Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
* `dialogflow_projects_locations_agents_test_cases_calculate_coverage` - Calculates the test coverage for an agent.
* `dialogflow_projects_locations_agents_test_cases_create` - Creates a test case for the given agent.
* `dialogflow_projects_locations_agents_test_cases_export` - Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
* `dialogflow_projects_locations_agents_test_cases_import` - Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
* `dialogflow_projects_locations_agents_test_cases_list` - Fetches a list of test cases for a given agent.
* `dialogflow_projects_locations_agents_test_cases_results_list` - Fetches a list of results for a given test case.
* `dialogflow_projects_locations_agents_test_cases_run` - Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
* `dialogflow_projects_locations_agents_webhooks_create` - Creates a webhook in the specified agent.
* `dialogflow_projects_locations_agents_webhooks_list` - Returns the list of all webhooks in the specified agent.
* `dialogflow_projects_locations_list` - Lists information about the supported locations for this service.
* `dialogflow_projects_locations_security_settings_create` - Create security settings in the specified location.
* `dialogflow_projects_locations_security_settings_delete` - Deletes the specified SecuritySettings.
* `dialogflow_projects_locations_security_settings_list` - Returns the list of all security settings in the specified location.
* `dialogflow_projects_locations_security_settings_patch` - Updates the specified SecuritySettings.
* `dialogflow_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `dialogflow_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `dialogflow_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
