import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * iapGetIamPolicy - Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
    **/
    iapGetIamPolicy(req: operations.IapGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapGetIamPolicyResponse>;
    /**
     * iapGetIapSettings - Gets the IAP settings on a particular IAP protected resource.
    **/
    iapGetIapSettings(req: operations.IapGetIapSettingsRequest, config?: AxiosRequestConfig): Promise<operations.IapGetIapSettingsResponse>;
    /**
     * iapSetIamPolicy - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
    **/
    iapSetIamPolicy(req: operations.IapSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapSetIamPolicyResponse>;
    /**
     * iapTestIamPermissions - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
    **/
    iapTestIamPermissions(req: operations.IapTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IapTestIamPermissionsResponse>;
    /**
     * iapUpdateIapSettings - Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
    **/
    iapUpdateIapSettings(req: operations.IapUpdateIapSettingsRequest, config?: AxiosRequestConfig): Promise<operations.IapUpdateIapSettingsResponse>;
}
