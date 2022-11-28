import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ExchangeRate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getExchangeRateList - Get Exchange Rate List
     *
     * Get Exchange Rate List
    **/
    getExchangeRateList(req: operations.GetExchangeRateListRequest, config?: AxiosRequestConfig): Promise<operations.GetExchangeRateListResponse>;
    /**
     * postExchangeRate - Create Exchange Rates
     *
     * Create Exchange Rates
    **/
    postExchangeRate(req: operations.PostExchangeRateRequest, config?: AxiosRequestConfig): Promise<operations.PostExchangeRateResponse>;
}
