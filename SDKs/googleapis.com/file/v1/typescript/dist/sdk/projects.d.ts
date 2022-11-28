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
     * fileProjectsLocationsBackupsCreate - Creates a backup.
    **/
    fileProjectsLocationsBackupsCreate(req: operations.FileProjectsLocationsBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsCreateResponse>;
    /**
     * fileProjectsLocationsBackupsList - Lists all backups in a project for either a specified location or for all locations.
    **/
    fileProjectsLocationsBackupsList(req: operations.FileProjectsLocationsBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsListResponse>;
    /**
     * fileProjectsLocationsInstancesCreate - Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
    **/
    fileProjectsLocationsInstancesCreate(req: operations.FileProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesCreateResponse>;
    /**
     * fileProjectsLocationsInstancesList - Lists all instances in a project for either a specified location or for all locations.
    **/
    fileProjectsLocationsInstancesList(req: operations.FileProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesListResponse>;
    /**
     * fileProjectsLocationsInstancesRestore - Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).
    **/
    fileProjectsLocationsInstancesRestore(req: operations.FileProjectsLocationsInstancesRestoreRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesRestoreResponse>;
    /**
     * fileProjectsLocationsInstancesSnapshotsCreate - Creates a snapshot.
    **/
    fileProjectsLocationsInstancesSnapshotsCreate(req: operations.FileProjectsLocationsInstancesSnapshotsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsCreateResponse>;
    /**
     * fileProjectsLocationsInstancesSnapshotsList - Lists all snapshots in a project for either a specified location or for all locations.
    **/
    fileProjectsLocationsInstancesSnapshotsList(req: operations.FileProjectsLocationsInstancesSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsListResponse>;
    /**
     * fileProjectsLocationsInstancesSnapshotsPatch - Updates the settings of a specific snapshot.
    **/
    fileProjectsLocationsInstancesSnapshotsPatch(req: operations.FileProjectsLocationsInstancesSnapshotsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsPatchResponse>;
    /**
     * fileProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    fileProjectsLocationsList(req: operations.FileProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsListResponse>;
    /**
     * fileProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    fileProjectsLocationsOperationsCancel(req: operations.FileProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsCancelResponse>;
    /**
     * fileProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    fileProjectsLocationsOperationsDelete(req: operations.FileProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsDeleteResponse>;
    /**
     * fileProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    fileProjectsLocationsOperationsGet(req: operations.FileProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsGetResponse>;
    /**
     * fileProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    fileProjectsLocationsOperationsList(req: operations.FileProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsListResponse>;
}
