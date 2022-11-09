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
    IdsProjectsLocationsEndpointsCreate(req: operations.IdsProjectsLocationsEndpointsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsCreateResponse>;
    IdsProjectsLocationsEndpointsGetIamPolicy(req: operations.IdsProjectsLocationsEndpointsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsGetIamPolicyResponse>;
    IdsProjectsLocationsEndpointsList(req: operations.IdsProjectsLocationsEndpointsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsListResponse>;
    IdsProjectsLocationsEndpointsSetIamPolicy(req: operations.IdsProjectsLocationsEndpointsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsSetIamPolicyResponse>;
    IdsProjectsLocationsEndpointsTestIamPermissions(req: operations.IdsProjectsLocationsEndpointsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsTestIamPermissionsResponse>;
    IdsProjectsLocationsList(req: operations.IdsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsListResponse>;
    IdsProjectsLocationsOperationsCancel(req: operations.IdsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsCancelResponse>;
    IdsProjectsLocationsOperationsDelete(req: operations.IdsProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsDeleteResponse>;
    IdsProjectsLocationsOperationsGet(req: operations.IdsProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsGetResponse>;
    IdsProjectsLocationsOperationsList(req: operations.IdsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsListResponse>;
}
export {};
