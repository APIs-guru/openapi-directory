import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Policy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkClientPolicy - Return the policy assigned to a client on the network
     *
     * Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    getNetworkClientPolicy(req: operations.GetNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkClientPolicyResponse>;
    /**
     * updateNetworkClientPolicy - Update the policy assigned to a client on the network
     *
     * Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.
    **/
    updateNetworkClientPolicy(req: operations.UpdateNetworkClientPolicyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkClientPolicyResponse>;
}
