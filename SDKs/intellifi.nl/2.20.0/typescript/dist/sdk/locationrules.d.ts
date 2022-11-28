import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locationrules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addLocationRule - Create location rule
    **/
    addLocationRule(req: operations.AddLocationRuleRequest, config?: AxiosRequestConfig): Promise<operations.AddLocationRuleResponse>;
    /**
     * deleteLocationRule - Delete location rule
    **/
    deleteLocationRule(req: operations.DeleteLocationRuleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationRuleResponse>;
    /**
     * getLocationRuleById - Get location rule
    **/
    getLocationRuleById(req: operations.GetLocationRuleByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationRuleByIdResponse>;
    /**
     * getLocationRules - Get all location rules
    **/
    getLocationRules(req: operations.GetLocationRulesRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationRulesResponse>;
    /**
     * updateLocationRule - Update existing location rule
    **/
    updateLocationRule(req: operations.UpdateLocationRuleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationRuleResponse>;
}
