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
    CloudbuildProjectsWorkerPoolsCreate(req: operations.CloudbuildProjectsWorkerPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsCreateResponse>;
    CloudbuildProjectsWorkerPoolsDelete(req: operations.CloudbuildProjectsWorkerPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsDeleteResponse>;
    CloudbuildProjectsWorkerPoolsGet(req: operations.CloudbuildProjectsWorkerPoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsGetResponse>;
    CloudbuildProjectsWorkerPoolsList(req: operations.CloudbuildProjectsWorkerPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsListResponse>;
    CloudbuildProjectsWorkerPoolsPatch(req: operations.CloudbuildProjectsWorkerPoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsPatchResponse>;
}
export {};
