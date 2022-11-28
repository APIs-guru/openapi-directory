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
     * mlProjectsExplain - Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %}
    **/
    mlProjectsExplain(req: operations.MlProjectsExplainRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsExplainResponse>;
    /**
     * mlProjectsGetConfig - Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
    **/
    mlProjectsGetConfig(req: operations.MlProjectsGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsGetConfigResponse>;
    /**
     * mlProjectsJobsCreate - Creates a training or a batch prediction job.
    **/
    mlProjectsJobsCreate(req: operations.MlProjectsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsJobsCreateResponse>;
    /**
     * mlProjectsJobsList - Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
    **/
    mlProjectsJobsList(req: operations.MlProjectsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsJobsListResponse>;
    /**
     * mlProjectsLocationsList - List all locations that provides at least one type of CMLE capability.
    **/
    mlProjectsLocationsList(req: operations.MlProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsListResponse>;
    /**
     * mlProjectsLocationsStudiesCreate - Creates a study.
    **/
    mlProjectsLocationsStudiesCreate(req: operations.MlProjectsLocationsStudiesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesCreateResponse>;
    /**
     * mlProjectsLocationsStudiesList - Lists all the studies in a region for an associated project.
    **/
    mlProjectsLocationsStudiesList(req: operations.MlProjectsLocationsStudiesListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesListResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsAddMeasurement - Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
    **/
    mlProjectsLocationsStudiesTrialsAddMeasurement(req: operations.MlProjectsLocationsStudiesTrialsAddMeasurementRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsAddMeasurementResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState - Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
    **/
    mlProjectsLocationsStudiesTrialsCheckEarlyStoppingState(req: operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCheckEarlyStoppingStateResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsComplete - Marks a trial as complete.
    **/
    mlProjectsLocationsStudiesTrialsComplete(req: operations.MlProjectsLocationsStudiesTrialsCompleteRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCompleteResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsCreate - Adds a user provided trial to a study.
    **/
    mlProjectsLocationsStudiesTrialsCreate(req: operations.MlProjectsLocationsStudiesTrialsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsCreateResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsList - Lists the trials associated with a study.
    **/
    mlProjectsLocationsStudiesTrialsList(req: operations.MlProjectsLocationsStudiesTrialsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsListResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsListOptimalTrials - Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
    **/
    mlProjectsLocationsStudiesTrialsListOptimalTrials(req: operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsListOptimalTrialsResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsStop - Stops a trial.
    **/
    mlProjectsLocationsStudiesTrialsStop(req: operations.MlProjectsLocationsStudiesTrialsStopRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsStopResponse>;
    /**
     * mlProjectsLocationsStudiesTrialsSuggest - Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
    **/
    mlProjectsLocationsStudiesTrialsSuggest(req: operations.MlProjectsLocationsStudiesTrialsSuggestRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsLocationsStudiesTrialsSuggestResponse>;
    /**
     * mlProjectsModelsCreate - Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
    **/
    mlProjectsModelsCreate(req: operations.MlProjectsModelsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsCreateResponse>;
    /**
     * mlProjectsModelsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    mlProjectsModelsGetIamPolicy(req: operations.MlProjectsModelsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsGetIamPolicyResponse>;
    /**
     * mlProjectsModelsList - Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
    **/
    mlProjectsModelsList(req: operations.MlProjectsModelsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsListResponse>;
    /**
     * mlProjectsModelsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    mlProjectsModelsSetIamPolicy(req: operations.MlProjectsModelsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsSetIamPolicyResponse>;
    /**
     * mlProjectsModelsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    mlProjectsModelsTestIamPermissions(req: operations.MlProjectsModelsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsTestIamPermissionsResponse>;
    /**
     * mlProjectsModelsVersionsCreate - Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
    **/
    mlProjectsModelsVersionsCreate(req: operations.MlProjectsModelsVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsCreateResponse>;
    /**
     * mlProjectsModelsVersionsDelete - Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
    **/
    mlProjectsModelsVersionsDelete(req: operations.MlProjectsModelsVersionsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsDeleteResponse>;
    /**
     * mlProjectsModelsVersionsList - Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
    **/
    mlProjectsModelsVersionsList(req: operations.MlProjectsModelsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsListResponse>;
    /**
     * mlProjectsModelsVersionsPatch - Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
    **/
    mlProjectsModelsVersionsPatch(req: operations.MlProjectsModelsVersionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsPatchResponse>;
    /**
     * mlProjectsModelsVersionsSetDefault - Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
    **/
    mlProjectsModelsVersionsSetDefault(req: operations.MlProjectsModelsVersionsSetDefaultRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsModelsVersionsSetDefaultResponse>;
    /**
     * mlProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    mlProjectsOperationsCancel(req: operations.MlProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsCancelResponse>;
    /**
     * mlProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    mlProjectsOperationsGet(req: operations.MlProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsGetResponse>;
    /**
     * mlProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    mlProjectsOperationsList(req: operations.MlProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsOperationsListResponse>;
    /**
     * mlProjectsPredict - Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %}
    **/
    mlProjectsPredict(req: operations.MlProjectsPredictRequest, config?: AxiosRequestConfig): Promise<operations.MlProjectsPredictResponse>;
}
