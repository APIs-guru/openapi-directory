import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Subaccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingSubaccountsGet - Gets one subaccount by ID.
    **/
    dfareportingSubaccountsGet(req: operations.DfareportingSubaccountsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsGetResponse>;
    /**
     * dfareportingSubaccountsInsert - Inserts a new subaccount.
    **/
    dfareportingSubaccountsInsert(req: operations.DfareportingSubaccountsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsInsertResponse>;
    /**
     * dfareportingSubaccountsList - Gets a list of subaccounts, possibly filtered. This method supports paging.
    **/
    dfareportingSubaccountsList(req: operations.DfareportingSubaccountsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsListResponse>;
    /**
     * dfareportingSubaccountsPatch - Updates an existing subaccount. This method supports patch semantics.
    **/
    dfareportingSubaccountsPatch(req: operations.DfareportingSubaccountsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsPatchResponse>;
    /**
     * dfareportingSubaccountsUpdate - Updates an existing subaccount.
    **/
    dfareportingSubaccountsUpdate(req: operations.DfareportingSubaccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSubaccountsUpdateResponse>;
}
