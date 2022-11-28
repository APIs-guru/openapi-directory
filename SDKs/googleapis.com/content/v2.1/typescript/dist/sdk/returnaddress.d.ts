import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Returnaddress {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentReturnaddressCustombatch - Batches multiple return address related calls in a single request.
    **/
    contentReturnaddressCustombatch(req: operations.ContentReturnaddressCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressCustombatchResponse>;
    /**
     * contentReturnaddressDelete - Deletes a return address for the given Merchant Center account.
    **/
    contentReturnaddressDelete(req: operations.ContentReturnaddressDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressDeleteResponse>;
    /**
     * contentReturnaddressGet - Gets a return address of the Merchant Center account.
    **/
    contentReturnaddressGet(req: operations.ContentReturnaddressGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressGetResponse>;
    /**
     * contentReturnaddressInsert - Inserts a return address for the Merchant Center account.
    **/
    contentReturnaddressInsert(req: operations.ContentReturnaddressInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressInsertResponse>;
    /**
     * contentReturnaddressList - Lists the return addresses of the Merchant Center account.
    **/
    contentReturnaddressList(req: operations.ContentReturnaddressListRequest, config?: AxiosRequestConfig): Promise<operations.ContentReturnaddressListResponse>;
}
