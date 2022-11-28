import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SubaccountManagement {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createSubAccount - Create subaccount
     *
     * Create a subaccount for a given primary account.
     *
    **/
    createSubAccount(req: operations.CreateSubAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubAccountResponse>;
    /**
     * modifySubaccount - Modify a subaccount
     *
     * Change one or more properties of a subaccount.
     *
    **/
    modifySubaccount(req: operations.ModifySubaccountRequest, config?: AxiosRequestConfig): Promise<operations.ModifySubaccountResponse>;
    /**
     * retrieveSubaccount - Retrieve a subaccount
     *
     * Get the information of a subaccount specified with its API key.
     *
    **/
    retrieveSubaccount(req: operations.RetrieveSubaccountRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSubaccountResponse>;
    /**
     * retrieveSubaccountsList - Retrieve list of subaccounts
     *
     * Get the information of all the subaccounts owned by the primary account.
     *
    **/
    retrieveSubaccountsList(req: operations.RetrieveSubaccountsListRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveSubaccountsListResponse>;
}
