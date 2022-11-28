import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orderreturns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentOrderreturnsGet - Retrieves an order return from your Merchant Center account.
    **/
    contentOrderreturnsGet(req: operations.ContentOrderreturnsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsGetResponse>;
    /**
     * contentOrderreturnsList - Lists order returns in your Merchant Center account.
    **/
    contentOrderreturnsList(req: operations.ContentOrderreturnsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreturnsListResponse>;
}
