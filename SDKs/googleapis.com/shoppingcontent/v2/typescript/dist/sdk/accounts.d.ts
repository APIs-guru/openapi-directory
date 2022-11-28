import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentAccountsAuthinfo - Returns information about the authenticated user.
    **/
    contentAccountsAuthinfo(req: operations.ContentAccountsAuthinfoRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsAuthinfoResponse>;
    /**
     * contentAccountsClaimwebsite - Claims the website of a Merchant Center sub-account.
    **/
    contentAccountsClaimwebsite(req: operations.ContentAccountsClaimwebsiteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsClaimwebsiteResponse>;
    /**
     * contentAccountsCustombatch - Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.
    **/
    contentAccountsCustombatch(req: operations.ContentAccountsCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsCustombatchResponse>;
    /**
     * contentAccountsDelete - Deletes a Merchant Center sub-account.
    **/
    contentAccountsDelete(req: operations.ContentAccountsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsDeleteResponse>;
    /**
     * contentAccountsGet - Retrieves a Merchant Center account.
    **/
    contentAccountsGet(req: operations.ContentAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsGetResponse>;
    /**
     * contentAccountsInsert - Creates a Merchant Center sub-account.
    **/
    contentAccountsInsert(req: operations.ContentAccountsInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsInsertResponse>;
    /**
     * contentAccountsLink - Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.
    **/
    contentAccountsLink(req: operations.ContentAccountsLinkRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsLinkResponse>;
    /**
     * contentAccountsList - Lists the sub-accounts in your Merchant Center account.
    **/
    contentAccountsList(req: operations.ContentAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsListResponse>;
    /**
     * contentAccountsUpdate - Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.
    **/
    contentAccountsUpdate(req: operations.ContentAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountsUpdateResponse>;
}
