import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1alpha1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * servicebrokerGetIamPolicy - Gets the access control policy for a resource.
     * Returns an empty policy if the resource exists and does not have a policy
     * set.
    **/
    servicebrokerGetIamPolicy(req: operations.ServicebrokerGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerGetIamPolicyResponse>;
    /**
     * servicebrokerSetIamPolicy - Sets the access control policy on the specified resource. Replaces any
     * existing policy.
     *
     * Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
    **/
    servicebrokerSetIamPolicy(req: operations.ServicebrokerSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerSetIamPolicyResponse>;
    /**
     * servicebrokerTestIamPermissions - Returns permissions that a caller has on the specified resource.
     * If the resource does not exist, this will return an empty set of
     * permissions, not a NOT_FOUND error.
     *
     * Note: This operation is designed to be used for building permission-aware
     * UIs and command-line tools, not for authorization checking. This operation
     * may "fail open" without warning.
    **/
    servicebrokerTestIamPermissions(req: operations.ServicebrokerTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ServicebrokerTestIamPermissionsResponse>;
}
