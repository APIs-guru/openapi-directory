import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Repricingrules {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentRepricingrulesCreate - Creates a repricing rule for your Merchant Center account.
    **/
    contentRepricingrulesCreate(req: operations.ContentRepricingrulesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesCreateResponse>;
    /**
     * contentRepricingrulesDelete - Deletes a repricing rule in your Merchant Center account.
    **/
    contentRepricingrulesDelete(req: operations.ContentRepricingrulesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesDeleteResponse>;
    /**
     * contentRepricingrulesGet - Retrieves a repricing rule from your Merchant Center account.
    **/
    contentRepricingrulesGet(req: operations.ContentRepricingrulesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesGetResponse>;
    /**
     * contentRepricingrulesList - Lists the repricing rules in your Merchant Center account.
    **/
    contentRepricingrulesList(req: operations.ContentRepricingrulesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesListResponse>;
    /**
     * contentRepricingrulesPatch - Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.
    **/
    contentRepricingrulesPatch(req: operations.ContentRepricingrulesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesPatchResponse>;
    /**
     * contentRepricingrulesRepricingreportsList - Lists the metrics report for a given Repricing rule.
    **/
    contentRepricingrulesRepricingreportsList(req: operations.ContentRepricingrulesRepricingreportsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentRepricingrulesRepricingreportsListResponse>;
}
