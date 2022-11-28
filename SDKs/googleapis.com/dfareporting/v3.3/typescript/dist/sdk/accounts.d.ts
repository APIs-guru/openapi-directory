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
     * dfareportingAccountsGet - Gets one account by ID.
    **/
    dfareportingAccountsGet(req: operations.DfareportingAccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsGetResponse>;
    /**
     * dfareportingAccountsList - Retrieves the list of accounts, possibly filtered. This method supports paging.
    **/
    dfareportingAccountsList(req: operations.DfareportingAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsListResponse>;
    /**
     * dfareportingAccountsPatch - Updates an existing account. This method supports patch semantics.
    **/
    dfareportingAccountsPatch(req: operations.DfareportingAccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsPatchResponse>;
    /**
     * dfareportingAccountsUpdate - Updates an existing account.
    **/
    dfareportingAccountsUpdate(req: operations.DfareportingAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAccountsUpdateResponse>;
}
