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
     * gkebackupProjectsLocationsBackupPlansBackupsCreate - Creates a Backup for the given BackupPlan.
    **/
    gkebackupProjectsLocationsBackupPlansBackupsCreate(req: operations.GkebackupProjectsLocationsBackupPlansBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsCreateResponse>;
    /**
     * gkebackupProjectsLocationsBackupPlansBackupsList - Lists the Backups for a given BackupPlan.
    **/
    gkebackupProjectsLocationsBackupPlansBackupsList(req: operations.GkebackupProjectsLocationsBackupPlansBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsListResponse>;
    /**
     * gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList - Lists the VolumeBackups for a given Backup.
    **/
    gkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsList(req: operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansBackupsVolumeBackupsListResponse>;
    /**
     * gkebackupProjectsLocationsBackupPlansCreate - Creates a new BackupPlan in a given location.
    **/
    gkebackupProjectsLocationsBackupPlansCreate(req: operations.GkebackupProjectsLocationsBackupPlansCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansCreateResponse>;
    /**
     * gkebackupProjectsLocationsBackupPlansList - Lists BackupPlans in a given location.
    **/
    gkebackupProjectsLocationsBackupPlansList(req: operations.GkebackupProjectsLocationsBackupPlansListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsBackupPlansListResponse>;
    /**
     * gkebackupProjectsLocationsDeleteOperations - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    gkebackupProjectsLocationsDeleteOperations(req: operations.GkebackupProjectsLocationsDeleteOperationsRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsDeleteOperationsResponse>;
    /**
     * gkebackupProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    gkebackupProjectsLocationsList(req: operations.GkebackupProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsListResponse>;
    /**
     * gkebackupProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    gkebackupProjectsLocationsOperationsCancel(req: operations.GkebackupProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsOperationsCancelResponse>;
    /**
     * gkebackupProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    gkebackupProjectsLocationsOperationsList(req: operations.GkebackupProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsOperationsListResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansCreate - Creates a new RestorePlan in a given location.
    **/
    gkebackupProjectsLocationsRestorePlansCreate(req: operations.GkebackupProjectsLocationsRestorePlansCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansCreateResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansList - Lists RestorePlans in a given location.
    **/
    gkebackupProjectsLocationsRestorePlansList(req: operations.GkebackupProjectsLocationsRestorePlansListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansListResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresCreate - Creates a new Restore for the given RestorePlan.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresCreate(req: operations.GkebackupProjectsLocationsRestorePlansRestoresCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresCreateResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresDelete - Deletes an existing Restore.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresDelete(req: operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresDeleteResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresList - Lists the Restores for a given RestorePlan.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresList(req: operations.GkebackupProjectsLocationsRestorePlansRestoresListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresListResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresPatch - Update a Restore.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresPatch(req: operations.GkebackupProjectsLocationsRestorePlansRestoresPatchRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresPatchResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet - Retrieve the details of a single VolumeRestore.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGet(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicy(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresGetIamPolicyResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList - Lists the VolumeRestores for a given Restore.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresList(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresListResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicy(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresSetIamPolicyResponse>;
    /**
     * gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    gkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissions(req: operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GkebackupProjectsLocationsRestorePlansRestoresVolumeRestoresTestIamPermissionsResponse>;
}
