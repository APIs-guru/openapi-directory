import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settlementreports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentSettlementreportsGet - Retrieves a settlement report from your Merchant Center account.
    **/
    contentSettlementreportsGet(req: operations.ContentSettlementreportsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentSettlementreportsGetResponse>;
    /**
     * contentSettlementreportsList - Retrieves a list of settlement reports from your Merchant Center account.
    **/
    contentSettlementreportsList(req: operations.ContentSettlementreportsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentSettlementreportsListResponse>;
}
