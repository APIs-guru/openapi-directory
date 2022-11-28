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
     * iapProjectsBrandsCreate - Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
    **/
    iapProjectsBrandsCreate(req: operations.IapProjectsBrandsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsCreateResponse>;
    /**
     * iapProjectsBrandsIdentityAwareProxyClientsCreate - Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
    **/
    iapProjectsBrandsIdentityAwareProxyClientsCreate(req: operations.IapProjectsBrandsIdentityAwareProxyClientsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsCreateResponse>;
    /**
     * iapProjectsBrandsIdentityAwareProxyClientsList - Lists the existing clients for the brand.
    **/
    iapProjectsBrandsIdentityAwareProxyClientsList(req: operations.IapProjectsBrandsIdentityAwareProxyClientsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsListResponse>;
    /**
     * iapProjectsBrandsIdentityAwareProxyClientsResetSecret - Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
    **/
    iapProjectsBrandsIdentityAwareProxyClientsResetSecret(req: operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsIdentityAwareProxyClientsResetSecretResponse>;
    /**
     * iapProjectsBrandsList - Lists the existing brands for the project.
    **/
    iapProjectsBrandsList(req: operations.IapProjectsBrandsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsBrandsListResponse>;
    /**
     * iapProjectsIapTunnelLocationsDestGroupsCreate - Creates a new TunnelDestGroup.
    **/
    iapProjectsIapTunnelLocationsDestGroupsCreate(req: operations.IapProjectsIapTunnelLocationsDestGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsCreateResponse>;
    /**
     * iapProjectsIapTunnelLocationsDestGroupsDelete - Deletes a TunnelDestGroup.
    **/
    iapProjectsIapTunnelLocationsDestGroupsDelete(req: operations.IapProjectsIapTunnelLocationsDestGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsDeleteResponse>;
    /**
     * iapProjectsIapTunnelLocationsDestGroupsGet - Retrieves an existing TunnelDestGroup.
    **/
    iapProjectsIapTunnelLocationsDestGroupsGet(req: operations.IapProjectsIapTunnelLocationsDestGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsGetResponse>;
    /**
     * iapProjectsIapTunnelLocationsDestGroupsList - Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
    **/
    iapProjectsIapTunnelLocationsDestGroupsList(req: operations.IapProjectsIapTunnelLocationsDestGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsListResponse>;
    /**
     * iapProjectsIapTunnelLocationsDestGroupsPatch - Updates a TunnelDestGroup.
    **/
    iapProjectsIapTunnelLocationsDestGroupsPatch(req: operations.IapProjectsIapTunnelLocationsDestGroupsPatchRequest, config?: AxiosRequestConfig): Promise<operations.IapProjectsIapTunnelLocationsDestGroupsPatchResponse>;
}
