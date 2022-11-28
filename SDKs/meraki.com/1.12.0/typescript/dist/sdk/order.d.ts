import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Order {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchQosRulesOrder - Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * Return the quality of service rule IDs by order in which they will be processed by the switch
    **/
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * updateNetworkSwitchQosRulesOrder - Update the order in which the rules should be processed by the switch
     *
     * Update the order in which the rules should be processed by the switch
    **/
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
}
