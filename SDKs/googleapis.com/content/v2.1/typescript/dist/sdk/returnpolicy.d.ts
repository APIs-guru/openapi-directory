import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Returnpolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentReturnpolicyCustombatch - Batches multiple return policy related calls in a single request.
    **/
    contentReturnpolicyCustombatch(req: operations.ContentReturnpolicyCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyCustombatchResponse>;
    /**
     * contentReturnpolicyDelete - Deletes a return policy for the given Merchant Center account.
    **/
    contentReturnpolicyDelete(req: operations.ContentReturnpolicyDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyDeleteResponse>;
    /**
     * contentReturnpolicyGet - Gets a return policy of the Merchant Center account.
    **/
    contentReturnpolicyGet(req: operations.ContentReturnpolicyGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyGetResponse>;
    /**
     * contentReturnpolicyInsert - Inserts a return policy for the Merchant Center account.
    **/
    contentReturnpolicyInsert(req: operations.ContentReturnpolicyInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyInsertResponse>;
    /**
     * contentReturnpolicyList - Lists the return policies of the Merchant Center account.
    **/
    contentReturnpolicyList(req: operations.ContentReturnpolicyListRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnpolicyListResponse>;
}
