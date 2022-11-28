import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Localinventory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentLocalinventoryCustombatch - Updates local inventory for multiple products or stores in a single request.
    **/
    contentLocalinventoryCustombatch(req: operations.ContentLocalinventoryCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentLocalinventoryCustombatchResponse>;
    /**
     * contentLocalinventoryInsert - Updates the local inventory of a product in your Merchant Center account.
    **/
    contentLocalinventoryInsert(req: operations.ContentLocalinventoryInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentLocalinventoryInsertResponse>;
}
