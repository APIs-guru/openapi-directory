import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Business {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getABatchOfBusinessTransactionClassificationResults - Get a batch of business transaction classification results.
     *
     * Get a batch of business transaction classification results.
    **/
    getABatchOfBusinessTransactionClassificationResults(req: operations.GetABatchOfBusinessTransactionClassificationResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetABatchOfBusinessTransactionClassificationResultsResponse>;
}
