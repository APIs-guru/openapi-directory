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
    NetworksecurityProjectsLocationsAuthorizationPoliciesCreate(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse>;
    NetworksecurityProjectsLocationsAuthorizationPoliciesList(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse>;
    NetworksecurityProjectsLocationsClientTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse>;
    NetworksecurityProjectsLocationsClientTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesListResponse>;
    NetworksecurityProjectsLocationsList(req: operations.NetworksecurityProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsListResponse>;
    NetworksecurityProjectsLocationsOperationsCancel(req: operations.NetworksecurityProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsCancelResponse>;
    NetworksecurityProjectsLocationsOperationsList(req: operations.NetworksecurityProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsListResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesDelete(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesGet(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesListResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesPatch(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse>;
    NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse>;
}
export {};
