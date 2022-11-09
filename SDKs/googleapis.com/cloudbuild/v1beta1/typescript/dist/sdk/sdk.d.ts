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
    CloudbuildProjectsLocationsOperationsCancel(req: operations.CloudbuildProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsOperationsCancelResponse>;
    CloudbuildProjectsLocationsWorkerPoolsCreate(req: operations.CloudbuildProjectsLocationsWorkerPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsCreateResponse>;
    CloudbuildProjectsLocationsWorkerPoolsDelete(req: operations.CloudbuildProjectsLocationsWorkerPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsDeleteResponse>;
    CloudbuildProjectsLocationsWorkerPoolsGet(req: operations.CloudbuildProjectsLocationsWorkerPoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsGetResponse>;
    CloudbuildProjectsLocationsWorkerPoolsList(req: operations.CloudbuildProjectsLocationsWorkerPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsListResponse>;
    CloudbuildProjectsLocationsWorkerPoolsPatch(req: operations.CloudbuildProjectsLocationsWorkerPoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsWorkerPoolsPatchResponse>;
}
export {};
