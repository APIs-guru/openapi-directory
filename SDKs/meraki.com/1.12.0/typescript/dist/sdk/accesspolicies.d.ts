import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccessPolicies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSwitchAccessPolicy - Create an access policy for a switch network
     *
     * Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    createNetworkSwitchAccessPolicy(req: operations.CreateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchAccessPolicyResponse>;
    /**
     * deleteNetworkSwitchAccessPolicy - Delete an access policy for a switch network
     *
     * Delete an access policy for a switch network
    **/
    deleteNetworkSwitchAccessPolicy(req: operations.DeleteNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchAccessPolicyResponse>;
    /**
     * getNetworkSwitchAccessPolicies - List the access policies for a switch network
     *
     * List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method
    **/
    getNetworkSwitchAccessPolicies(req: operations.GetNetworkSwitchAccessPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPoliciesResponse>;
    /**
     * getNetworkSwitchAccessPolicy - Return a specific access policy for a switch network
     *
     * Return a specific access policy for a switch network
    **/
    getNetworkSwitchAccessPolicy(req: operations.GetNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessPolicyResponse>;
    /**
     * updateNetworkSwitchAccessPolicy - Update an access policy for a switch network
     *
     * Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.
    **/
    updateNetworkSwitchAccessPolicy(req: operations.UpdateNetworkSwitchAccessPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessPolicyResponse>;
}
