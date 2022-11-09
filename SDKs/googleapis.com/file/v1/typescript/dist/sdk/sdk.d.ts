import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    FileProjectsLocationsBackupsCreate(req: operations.FileProjectsLocationsBackupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsCreateResponse>;
    FileProjectsLocationsBackupsList(req: operations.FileProjectsLocationsBackupsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsBackupsListResponse>;
    FileProjectsLocationsInstancesCreate(req: operations.FileProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesCreateResponse>;
    FileProjectsLocationsInstancesList(req: operations.FileProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesListResponse>;
    FileProjectsLocationsInstancesRestore(req: operations.FileProjectsLocationsInstancesRestoreRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesRestoreResponse>;
    FileProjectsLocationsInstancesSnapshotsCreate(req: operations.FileProjectsLocationsInstancesSnapshotsCreateRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsCreateResponse>;
    FileProjectsLocationsInstancesSnapshotsList(req: operations.FileProjectsLocationsInstancesSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsListResponse>;
    FileProjectsLocationsInstancesSnapshotsPatch(req: operations.FileProjectsLocationsInstancesSnapshotsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsInstancesSnapshotsPatchResponse>;
    FileProjectsLocationsList(req: operations.FileProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsListResponse>;
    FileProjectsLocationsOperationsCancel(req: operations.FileProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsCancelResponse>;
    FileProjectsLocationsOperationsDelete(req: operations.FileProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsDeleteResponse>;
    FileProjectsLocationsOperationsGet(req: operations.FileProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsGetResponse>;
    FileProjectsLocationsOperationsList(req: operations.FileProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.FileProjectsLocationsOperationsListResponse>;
}
export {};
