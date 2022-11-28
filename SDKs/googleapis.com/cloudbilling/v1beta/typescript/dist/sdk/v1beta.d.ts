import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1beta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudbillingEstimateCostScenario - Estimate list prices using a `CostScenario` without a defined `billingAccount`.
    **/
    cloudbillingEstimateCostScenario(req: operations.CloudbillingEstimateCostScenarioRequest, config?: AxiosRequestConfig): Promise<operations.CloudbillingEstimateCostScenarioResponse>;
}
