import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Policies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * iamPoliciesCreatePolicy - Creates a policy.
    **/
    iamPoliciesCreatePolicy(req: operations.IamPoliciesCreatePolicyRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesCreatePolicyResponse>;
    /**
     * iamPoliciesDelete - Deletes a policy. This action is permanent.
    **/
    iamPoliciesDelete(req: operations.IamPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesDeleteResponse>;
    /**
     * iamPoliciesListPolicies - Retrieves the policies of the specified kind that are attached to a resource. The response lists only policy metadata. In particular, policy rules are omitted.
    **/
    iamPoliciesListPolicies(req: operations.IamPoliciesListPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesListPoliciesResponse>;
    /**
     * iamPoliciesOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    iamPoliciesOperationsGet(req: operations.IamPoliciesOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesOperationsGetResponse>;
    /**
     * iamPoliciesUpdate - Updates the specified policy. You can update only the rules and the display name for the policy. To update a policy, you should use a read-modify-write loop: 1. Use GetPolicy to read the current version of the policy. 2. Modify the policy as needed. 3. Use `UpdatePolicy` to write the updated policy. This pattern helps prevent conflicts between concurrent updates.
    **/
    iamPoliciesUpdate(req: operations.IamPoliciesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.IamPoliciesUpdateResponse>;
}
