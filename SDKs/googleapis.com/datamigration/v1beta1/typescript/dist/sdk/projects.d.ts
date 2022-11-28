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
     * datamigrationProjectsLocationsConnectionProfilesCreate - Creates a new connection profile in a given project and location.
    **/
    datamigrationProjectsLocationsConnectionProfilesCreate(req: operations.DatamigrationProjectsLocationsConnectionProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConnectionProfilesCreateResponse>;
    /**
     * datamigrationProjectsLocationsConnectionProfilesList - Retrieve a list of all connection profiles in a given project and location.
    **/
    datamigrationProjectsLocationsConnectionProfilesList(req: operations.DatamigrationProjectsLocationsConnectionProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsConnectionProfilesListResponse>;
    /**
     * datamigrationProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    datamigrationProjectsLocationsList(req: operations.DatamigrationProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsListResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsCreate - Creates a new migration job in a given project and location.
    **/
    datamigrationProjectsLocationsMigrationJobsCreate(req: operations.DatamigrationProjectsLocationsMigrationJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsCreateResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsGenerateSshScript - Generate a SSH configuration script to configure the reverse SSH connectivity.
    **/
    datamigrationProjectsLocationsMigrationJobsGenerateSshScript(req: operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsGenerateSshScriptResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    datamigrationProjectsLocationsMigrationJobsGetIamPolicy(req: operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsGetIamPolicyResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsList - Lists migration jobs in a given project and location.
    **/
    datamigrationProjectsLocationsMigrationJobsList(req: operations.DatamigrationProjectsLocationsMigrationJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsListResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsPatch - Updates the parameters of a single migration job.
    **/
    datamigrationProjectsLocationsMigrationJobsPatch(req: operations.DatamigrationProjectsLocationsMigrationJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsPatchResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsPromote - Promote a migration job, stopping replication to the destination and promoting the destination to be a standalone database.
    **/
    datamigrationProjectsLocationsMigrationJobsPromote(req: operations.DatamigrationProjectsLocationsMigrationJobsPromoteRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsPromoteResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsRestart - Restart a stopped or failed migration job, resetting the destination instance to its original state and starting the migration process from scratch.
    **/
    datamigrationProjectsLocationsMigrationJobsRestart(req: operations.DatamigrationProjectsLocationsMigrationJobsRestartRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsRestartResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsResume - Resume a migration job that is currently stopped and is resumable (was stopped during CDC phase).
    **/
    datamigrationProjectsLocationsMigrationJobsResume(req: operations.DatamigrationProjectsLocationsMigrationJobsResumeRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsResumeResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    datamigrationProjectsLocationsMigrationJobsSetIamPolicy(req: operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsSetIamPolicyResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsStart - Start an already created migration job.
    **/
    datamigrationProjectsLocationsMigrationJobsStart(req: operations.DatamigrationProjectsLocationsMigrationJobsStartRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsStartResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsStop - Stops a running migration job.
    **/
    datamigrationProjectsLocationsMigrationJobsStop(req: operations.DatamigrationProjectsLocationsMigrationJobsStopRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsStopResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    datamigrationProjectsLocationsMigrationJobsTestIamPermissions(req: operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsTestIamPermissionsResponse>;
    /**
     * datamigrationProjectsLocationsMigrationJobsVerify - Verify a migration job, making sure the destination can reach the source and that all configuration and prerequisites are met.
    **/
    datamigrationProjectsLocationsMigrationJobsVerify(req: operations.DatamigrationProjectsLocationsMigrationJobsVerifyRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsMigrationJobsVerifyResponse>;
    /**
     * datamigrationProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    datamigrationProjectsLocationsOperationsCancel(req: operations.DatamigrationProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsCancelResponse>;
    /**
     * datamigrationProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    datamigrationProjectsLocationsOperationsDelete(req: operations.DatamigrationProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsDeleteResponse>;
    /**
     * datamigrationProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    datamigrationProjectsLocationsOperationsGet(req: operations.DatamigrationProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsGetResponse>;
    /**
     * datamigrationProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    datamigrationProjectsLocationsOperationsList(req: operations.DatamigrationProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatamigrationProjectsLocationsOperationsListResponse>;
}
