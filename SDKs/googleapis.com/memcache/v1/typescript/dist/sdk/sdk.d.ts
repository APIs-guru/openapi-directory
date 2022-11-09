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
    MemcacheProjectsLocationsInstancesApplyParameters(req: operations.MemcacheProjectsLocationsInstancesApplyParametersRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesApplyParametersResponse>;
    MemcacheProjectsLocationsInstancesCreate(req: operations.MemcacheProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesCreateResponse>;
    MemcacheProjectsLocationsInstancesList(req: operations.MemcacheProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesListResponse>;
    MemcacheProjectsLocationsInstancesPatch(req: operations.MemcacheProjectsLocationsInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesPatchResponse>;
    MemcacheProjectsLocationsInstancesRescheduleMaintenance(req: operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse>;
    MemcacheProjectsLocationsInstancesUpdateParameters(req: operations.MemcacheProjectsLocationsInstancesUpdateParametersRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesUpdateParametersResponse>;
    MemcacheProjectsLocationsList(req: operations.MemcacheProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsListResponse>;
    MemcacheProjectsLocationsOperationsCancel(req: operations.MemcacheProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsCancelResponse>;
    MemcacheProjectsLocationsOperationsDelete(req: operations.MemcacheProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsDeleteResponse>;
    MemcacheProjectsLocationsOperationsGet(req: operations.MemcacheProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsGetResponse>;
    MemcacheProjectsLocationsOperationsList(req: operations.MemcacheProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsListResponse>;
}
export {};
