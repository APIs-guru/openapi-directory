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
    
    req := operations.MlProjectsExplainRequest{
        Security: operations.MlProjectsExplainSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.MlProjectsExplainPathParams{
            Name: "sit",
        },
        QueryParams: operations.MlProjectsExplainQueryParams{
            DollarXgafv: "1",
            AccessToken: "sit",
            Alt: "media",
            Callback: "quod",
            Fields: "eaque",
            Key: "recusandae",
            OauthToken: "quam",
            PrettyPrint: false,
            QuotaUser: "voluptatem",
            UploadType: "sit",
            UploadProtocol: "consequuntur",
        },
        Request: &shared.GoogleCloudMlV1ExplainRequest{
            HTTPBody: &shared.GoogleAPIHTTPBody{
                ContentType: "est",
                Data: "labore",
                Extensions: []map[string]interface{}{
                    map[string]interface{}{
                        "impedit": "tempora",
                        "iure": "excepturi",
                    },
                    map[string]interface{}{
                        "itaque": "iste",
                        "consequatur": "alias",
                        "distinctio": "illo",
                    },
                    map[string]interface{}{
                        "soluta": "nihil",
                        "beatae": "sit",
                        "laborum": "adipisci",
                    },
                },
            },
        },
    }
    
    res, err := s.Projects.MlProjectsExplain(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAPIHTTPBody != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `MlProjectsExplain` - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %} 
* `MlProjectsGetConfig` - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
* `MlProjectsJobsCreate` - Creates a training or a batch prediction job.
* `MlProjectsJobsList` - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
* `MlProjectsLocationsList` - List all locations that provides at least one type of CMLE capability.
* `MlProjectsLocationsStudiesCreate` - Creates a study.
* `MlProjectsLocationsStudiesList` - Lists all the studies in a region for an associated project.
* `MlProjectsLocationsStudiesTrialsAddMeasurement` - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
* `MlProjectsLocationsStudiesTrialsCheckEarlyStoppingState` - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
* `MlProjectsLocationsStudiesTrialsComplete` - Marks a trial as complete.
* `MlProjectsLocationsStudiesTrialsCreate` - Adds a user provided trial to a study.
* `MlProjectsLocationsStudiesTrialsList` - Lists the trials associated with a study.
* `MlProjectsLocationsStudiesTrialsListOptimalTrials` - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
* `MlProjectsLocationsStudiesTrialsStop` - Stops a trial.
* `MlProjectsLocationsStudiesTrialsSuggest` - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
* `MlProjectsModelsCreate` - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
* `MlProjectsModelsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `MlProjectsModelsList` - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
* `MlProjectsModelsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `MlProjectsModelsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `MlProjectsModelsVersionsCreate` - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
* `MlProjectsModelsVersionsDelete` - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
* `MlProjectsModelsVersionsList` - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
* `MlProjectsModelsVersionsPatch` - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
* `MlProjectsModelsVersionsSetDefault` - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
* `MlProjectsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `MlProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `MlProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `MlProjectsPredict` - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %} 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
