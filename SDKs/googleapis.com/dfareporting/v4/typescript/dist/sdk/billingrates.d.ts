import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BillingRates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingBillingRatesList - Retrieves a list of billing rates. This method supports paging.
    **/
    dfareportingBillingRatesList(req: operations.DfareportingBillingRatesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingBillingRatesListResponse>;
}
