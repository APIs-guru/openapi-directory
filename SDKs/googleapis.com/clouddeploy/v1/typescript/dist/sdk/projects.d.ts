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
     * clouddeployProjectsLocationsDeliveryPipelinesCreate - Creates a new DeliveryPipeline in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesList - Lists DeliveryPipelines in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesListResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon - Abandons a Release in the Delivery Pipeline.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate - Creates a new Release in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesList - Lists Releases in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove - Approves a Rollout.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate - Creates a new Rollout in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList - Lists JobRuns in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList - Lists Rollouts in a given project and location.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse>;
    /**
     * clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob - Retries the specified Job in a Rollout.
    **/
    clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob(req: operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobResponse>;
    /**
     * clouddeployProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    clouddeployProjectsLocationsList(req: operations.ClouddeployProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsListResponse>;
    /**
     * clouddeployProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    clouddeployProjectsLocationsOperationsCancel(req: operations.ClouddeployProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsOperationsCancelResponse>;
    /**
     * clouddeployProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    clouddeployProjectsLocationsOperationsList(req: operations.ClouddeployProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsOperationsListResponse>;
    /**
     * clouddeployProjectsLocationsTargetsCreate - Creates a new Target in a given project and location.
    **/
    clouddeployProjectsLocationsTargetsCreate(req: operations.ClouddeployProjectsLocationsTargetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsCreateResponse>;
    /**
     * clouddeployProjectsLocationsTargetsDelete - Deletes a single Target.
    **/
    clouddeployProjectsLocationsTargetsDelete(req: operations.ClouddeployProjectsLocationsTargetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsDeleteResponse>;
    /**
     * clouddeployProjectsLocationsTargetsGet - Gets details of a single Target.
    **/
    clouddeployProjectsLocationsTargetsGet(req: operations.ClouddeployProjectsLocationsTargetsGetRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsGetResponse>;
    /**
     * clouddeployProjectsLocationsTargetsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    clouddeployProjectsLocationsTargetsGetIamPolicy(req: operations.ClouddeployProjectsLocationsTargetsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsGetIamPolicyResponse>;
    /**
     * clouddeployProjectsLocationsTargetsList - Lists Targets in a given project and location.
    **/
    clouddeployProjectsLocationsTargetsList(req: operations.ClouddeployProjectsLocationsTargetsListRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsListResponse>;
    /**
     * clouddeployProjectsLocationsTargetsPatch - Updates the parameters of a single Target.
    **/
    clouddeployProjectsLocationsTargetsPatch(req: operations.ClouddeployProjectsLocationsTargetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsPatchResponse>;
    /**
     * clouddeployProjectsLocationsTargetsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    clouddeployProjectsLocationsTargetsSetIamPolicy(req: operations.ClouddeployProjectsLocationsTargetsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsSetIamPolicyResponse>;
    /**
     * clouddeployProjectsLocationsTargetsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    clouddeployProjectsLocationsTargetsTestIamPermissions(req: operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse>;
}
