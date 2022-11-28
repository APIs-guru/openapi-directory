import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkGroupPolicy - Create a group policy
     *
     * Create a group policy
    **/
    createNetworkGroupPolicy(req: operations.CreateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkGroupPolicyResponse>;
    /**
     * deleteNetworkGroupPolicy - Delete a group policy
     *
     * Delete a group policy
    **/
    deleteNetworkGroupPolicy(req: operations.DeleteNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkGroupPolicyResponse>;
    /**
     * getNetworkGroupPolicies - List the group policies in a network
     *
     * List the group policies in a network
    **/
    getNetworkGroupPolicies(req: operations.GetNetworkGroupPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPoliciesResponse>;
    /**
     * getNetworkGroupPolicy - Display a group policy
     *
     * Display a group policy
    **/
    getNetworkGroupPolicy(req: operations.GetNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkGroupPolicyResponse>;
    /**
     * updateNetworkGroupPolicy - Update a group policy
     *
     * Update a group policy
    **/
    updateNetworkGroupPolicy(req: operations.UpdateNetworkGroupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkGroupPolicyResponse>;
}
