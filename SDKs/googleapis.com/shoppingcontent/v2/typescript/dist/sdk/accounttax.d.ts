import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounttax {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentAccounttaxCustombatch - Retrieves and updates tax settings of multiple accounts in a single request.
    **/
    contentAccounttaxCustombatch(req: operations.ContentAccounttaxCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxCustombatchResponse>;
    /**
     * contentAccounttaxGet - Retrieves the tax settings of the account.
    **/
    contentAccounttaxGet(req: operations.ContentAccounttaxGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxGetResponse>;
    /**
     * contentAccounttaxList - Lists the tax settings of the sub-accounts in your Merchant Center account.
    **/
    contentAccounttaxList(req: operations.ContentAccounttaxListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxListResponse>;
    /**
     * contentAccounttaxUpdate - Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.
    **/
    contentAccounttaxUpdate(req: operations.ContentAccounttaxUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccounttaxUpdateResponse>;
}
