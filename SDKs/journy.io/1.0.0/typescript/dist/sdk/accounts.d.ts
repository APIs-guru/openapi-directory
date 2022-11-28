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
     * addUserToAccount - Add user to account
     *
     * Endpoint used to add a user to an account.
    **/
    addUserToAccount(req: operations.AddUserToAccountRequest, config?: AxiosRequestConfig): Promise<operations.AddUserToAccountResponse>;
    /**
     * removeUserFromAccount - Remove user from account
     *
     * Endpoint used to remove a user from an account.
    **/
    removeUserFromAccount(req: operations.RemoveUserFromAccountRequest, config?: AxiosRequestConfig): Promise<operations.RemoveUserFromAccountResponse>;
    /**
     * upsertAccount - Create or update account
     *
     * Endpoint used to create or update an account.
    **/
    upsertAccount(req: operations.UpsertAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpsertAccountResponse>;
}
