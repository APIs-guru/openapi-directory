import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1beta1 {
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
     * iapSetIamPolicy - Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
    **/
    iapSetIamPolicy(req: operations.IapSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IapSetIamPolicyResponse>;
    /**
     * iapTestIamPermissions - Returns permissions that a caller has on the Identity-Aware Proxy protected resource. If the resource does not exist or the caller does not have Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED] will be returned. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
    **/
    iapTestIamPermissions(req: operations.IapTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IapTestIamPermissionsResponse>;
}
