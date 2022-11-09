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
    DatafusionProjectsLocationsInstancesCreate(req: operations.DatafusionProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesCreateResponse>;
    DatafusionProjectsLocationsInstancesDnsPeeringsCreate(req: operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesDnsPeeringsCreateResponse>;
    DatafusionProjectsLocationsInstancesDnsPeeringsList(req: operations.DatafusionProjectsLocationsInstancesDnsPeeringsListRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesDnsPeeringsListResponse>;
    DatafusionProjectsLocationsInstancesGetIamPolicy(req: operations.DatafusionProjectsLocationsInstancesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesGetIamPolicyResponse>;
    DatafusionProjectsLocationsInstancesList(req: operations.DatafusionProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesListResponse>;
    DatafusionProjectsLocationsInstancesPatch(req: operations.DatafusionProjectsLocationsInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesPatchResponse>;
    DatafusionProjectsLocationsInstancesRestart(req: operations.DatafusionProjectsLocationsInstancesRestartRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesRestartResponse>;
    DatafusionProjectsLocationsInstancesSetIamPolicy(req: operations.DatafusionProjectsLocationsInstancesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesSetIamPolicyResponse>;
    DatafusionProjectsLocationsInstancesTestIamPermissions(req: operations.DatafusionProjectsLocationsInstancesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsInstancesTestIamPermissionsResponse>;
    DatafusionProjectsLocationsList(req: operations.DatafusionProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsListResponse>;
    DatafusionProjectsLocationsOperationsCancel(req: operations.DatafusionProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsCancelResponse>;
    DatafusionProjectsLocationsOperationsDelete(req: operations.DatafusionProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsDeleteResponse>;
    DatafusionProjectsLocationsOperationsGet(req: operations.DatafusionProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsGetResponse>;
    DatafusionProjectsLocationsOperationsList(req: operations.DatafusionProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsOperationsListResponse>;
    DatafusionProjectsLocationsVersionsList(req: operations.DatafusionProjectsLocationsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.DatafusionProjectsLocationsVersionsListResponse>;
}
export {};
