import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class QosRules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSwitchQosRule - Add a quality of service rule
     *
     * Add a quality of service rule
    **/
    createNetworkSwitchQosRule(req: operations.CreateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchQosRuleResponse>;
    /**
     * deleteNetworkSwitchQosRule - Delete a quality of service rule
     *
     * Delete a quality of service rule
    **/
    deleteNetworkSwitchQosRule(req: operations.DeleteNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchQosRuleResponse>;
    /**
     * getNetworkSwitchQosRule - Return a quality of service rule
     *
     * Return a quality of service rule
    **/
    getNetworkSwitchQosRule(req: operations.GetNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRuleResponse>;
    /**
     * getNetworkSwitchQosRules - List quality of service rules
     *
     * List quality of service rules
    **/
    getNetworkSwitchQosRules(req: operations.GetNetworkSwitchQosRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesResponse>;
    /**
     * getNetworkSwitchQosRulesOrder - Return the quality of service rule IDs by order in which they will be processed by the switch
     *
     * Return the quality of service rule IDs by order in which they will be processed by the switch
    **/
    getNetworkSwitchQosRulesOrder(req: operations.GetNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchQosRulesOrderResponse>;
    /**
     * updateNetworkSwitchQosRule - Update a quality of service rule
     *
     * Update a quality of service rule
    **/
    updateNetworkSwitchQosRule(req: operations.UpdateNetworkSwitchQosRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRuleResponse>;
    /**
     * updateNetworkSwitchQosRulesOrder - Update the order in which the rules should be processed by the switch
     *
     * Update the order in which the rules should be processed by the switch
    **/
    updateNetworkSwitchQosRulesOrder(req: operations.UpdateNetworkSwitchQosRulesOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchQosRulesOrderResponse>;
}
