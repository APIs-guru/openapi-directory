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
    
req = operations.MlProjectsExplainRequest(
    security=operations.MlProjectsExplainSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.MlProjectsExplainPathParams(
        name="sit",
    ),
    query_params=operations.MlProjectsExplainQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        alt="media",
        callback="quod",
        fields="eaque",
        key="recusandae",
        oauth_token="quam",
        pretty_print=False,
        quota_user="voluptatem",
        upload_type="sit",
        upload_protocol="consequuntur",
    ),
    request=shared.GoogleCloudMlV1ExplainRequest(
        http_body=shared.GoogleAPIHTTPBody(
            content_type="est",
            data="labore",
            extensions=[
                {
                    "impedit": "tempora",
                    "iure": "excepturi",
                },
                {
                    "itaque": "iste",
                    "consequatur": "alias",
                    "distinctio": "illo",
                },
                {
                    "soluta": "nihil",
                    "beatae": "sit",
                    "laborum": "adipisci",
                },
            ],
        ),
    ),
)
    
res = s.projects.ml_projects_explain(req)

if res.google_api_http_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `ml_projects_explain` - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 
* `ml_projects_get_config` - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
* `ml_projects_jobs_create` - Creates a training or a batch prediction job.
* `ml_projects_jobs_list` - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
* `ml_projects_locations_list` - List all locations that provides at least one type of CMLE capability.
* `ml_projects_locations_studies_create` - Creates a study.
* `ml_projects_locations_studies_list` - Lists all the studies in a region for an associated project.
* `ml_projects_locations_studies_trials_add_measurement` - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
* `ml_projects_locations_studies_trials_check_early_stopping_state` - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
* `ml_projects_locations_studies_trials_complete` - Marks a trial as complete.
* `ml_projects_locations_studies_trials_create` - Adds a user provided trial to a study.
* `ml_projects_locations_studies_trials_list` - Lists the trials associated with a study.
* `ml_projects_locations_studies_trials_list_optimal_trials` - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
* `ml_projects_locations_studies_trials_stop` - Stops a trial.
* `ml_projects_locations_studies_trials_suggest` - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
* `ml_projects_models_create` - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
* `ml_projects_models_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `ml_projects_models_list` - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
* `ml_projects_models_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `ml_projects_models_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `ml_projects_models_versions_create` - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
* `ml_projects_models_versions_delete` - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
* `ml_projects_models_versions_list` - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
* `ml_projects_models_versions_patch` - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
* `ml_projects_models_versions_set_default` - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
* `ml_projects_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `ml_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `ml_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `ml_projects_predict` - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
