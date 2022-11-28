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
     * mirrorAccountsInsert - Inserts a new account for a user
    **/
    mirrorAccountsInsert(req: operations.MirrorAccountsInsertRequest, config?: AxiosRequestConfig): Promise<operations.MirrorAccountsInsertResponse>;
}
