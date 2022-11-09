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
    RedisProjectsLocationsInstancesCreate(req: operations.RedisProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesCreateResponse>;
    RedisProjectsLocationsInstancesExport(req: operations.RedisProjectsLocationsInstancesExportRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesExportResponse>;
    RedisProjectsLocationsInstancesFailover(req: operations.RedisProjectsLocationsInstancesFailoverRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesFailoverResponse>;
    RedisProjectsLocationsInstancesGetAuthString(req: operations.RedisProjectsLocationsInstancesGetAuthStringRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesGetAuthStringResponse>;
    RedisProjectsLocationsInstancesImport(req: operations.RedisProjectsLocationsInstancesImportRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesImportResponse>;
    RedisProjectsLocationsInstancesList(req: operations.RedisProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesListResponse>;
    RedisProjectsLocationsInstancesPatch(req: operations.RedisProjectsLocationsInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesPatchResponse>;
    RedisProjectsLocationsInstancesRescheduleMaintenance(req: operations.RedisProjectsLocationsInstancesRescheduleMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesRescheduleMaintenanceResponse>;
    RedisProjectsLocationsInstancesUpgrade(req: operations.RedisProjectsLocationsInstancesUpgradeRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesUpgradeResponse>;
    RedisProjectsLocationsList(req: operations.RedisProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsListResponse>;
    RedisProjectsLocationsOperationsCancel(req: operations.RedisProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsCancelResponse>;
    RedisProjectsLocationsOperationsDelete(req: operations.RedisProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsDeleteResponse>;
    RedisProjectsLocationsOperationsGet(req: operations.RedisProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsGetResponse>;
    RedisProjectsLocationsOperationsList(req: operations.RedisProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsListResponse>;
}
export {};
