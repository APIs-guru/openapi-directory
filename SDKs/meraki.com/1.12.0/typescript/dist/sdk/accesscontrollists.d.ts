import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AccessControlLists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchAccessControlLists - Return the access control lists for a MS network
     *
     * Return the access control lists for a MS network
    **/
    getNetworkSwitchAccessControlLists(req: operations.GetNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAccessControlListsResponse>;
    /**
     * updateNetworkSwitchAccessControlLists - Update the access control lists for a MS network
     *
     * Update the access control lists for a MS network
    **/
    updateNetworkSwitchAccessControlLists(req: operations.UpdateNetworkSwitchAccessControlListsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAccessControlListsResponse>;
}
