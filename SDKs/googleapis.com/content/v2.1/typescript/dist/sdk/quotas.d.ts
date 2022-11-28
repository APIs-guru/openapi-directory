import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Quotas {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentQuotasList - Lists the quota limit and quota usage per method for your Merchant Center account.
    **/
    contentQuotasList(req: operations.ContentQuotasListRequest, config?: AxiosRequestConfig): Promise<operations.ContentQuotasListResponse>;
}
