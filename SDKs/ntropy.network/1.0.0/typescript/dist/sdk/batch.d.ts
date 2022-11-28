import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Batch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getABatchOfConsumerTransactionClassificationResults - Get a batch of consumer transaction classification results.
     *
     * Get a batch of consumer transaction classification results.
    **/
    getABatchOfConsumerTransactionClassificationResults(req: operations.GetABatchOfConsumerTransactionClassificationResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetABatchOfConsumerTransactionClassificationResultsResponse>;
}
