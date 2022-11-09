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
    IapGetIamPolicy(req: operations.IapGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapGetIamPolicyResponse>;
    IapGetIapSettings(req: operations.IapGetIapSettingsRequest, config?: AxiosRequestConfig): Promise<operations.IapGetIapSettingsResponse>;
    IapProjectsBrandsCreate(req: operations.IapProjectsBrandsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsCreateResponse>;
    IapProjectsBrandsIdentityAwareProxyClientsCreate(req: operations.IapProjectsBrandsIdentityAwareProxyClientsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsCreateResponse>;
    IapProjectsBrandsIdentityAwareProxyClientsList(req: operations.IapProjectsBrandsIdentityAwareProxyClientsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsListResponse>;
    IapProjectsBrandsIdentityAwareProxyClientsResetSecret(req: operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse>;
    IapProjectsBrandsList(req: operations.IapProjectsBrandsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsListResponse>;
    IapProjectsIapTunnelLocationsDestGroupsCreate(req: operations.IapProjectsIapTunnelLocationsDestGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsCreateResponse>;
    IapProjectsIapTunnelLocationsDestGroupsDelete(req: operations.IapProjectsIapTunnelLocationsDestGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsDeleteResponse>;
    IapProjectsIapTunnelLocationsDestGroupsGet(req: operations.IapProjectsIapTunnelLocationsDestGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsGetResponse>;
    IapProjectsIapTunnelLocationsDestGroupsList(req: operations.IapProjectsIapTunnelLocationsDestGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsListResponse>;
    IapProjectsIapTunnelLocationsDestGroupsPatch(req: operations.IapProjectsIapTunnelLocationsDestGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsPatchResponse>;
    IapSetIamPolicy(req: operations.IapSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapSetIamPolicyResponse>;
    IapTestIamPermissions(req: operations.IapTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IapTestIamPermissionsResponse>;
    IapUpdateIapSettings(req: operations.IapUpdateIapSettingsRequest, config?: AxiosRequestConfig): Promise<operations.IapUpdateIapSettingsResponse>;
}
export {};
