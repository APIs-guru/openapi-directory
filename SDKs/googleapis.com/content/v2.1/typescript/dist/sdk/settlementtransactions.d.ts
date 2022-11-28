import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settlementtransactions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentSettlementtransactionsList - Retrieves a list of transactions for the settlement.
    **/
    contentSettlementtransactionsList(req: operations.ContentSettlementtransactionsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentSettlementtransactionsListResponse>;
}
