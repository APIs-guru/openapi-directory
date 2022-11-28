import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pca {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getPersonalCurrentAccounts - Gets a list of all `Personal Current Account` objects.
    **/
    getPersonalCurrentAccounts(req: operations.GetPersonalCurrentAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonalCurrentAccountsResponse>;
    /**
     * headPersonalCurrentAccounts - Gets header information on the current set of `Personal Current Account` data
    **/
    headPersonalCurrentAccounts(req: operations.HeadPersonalCurrentAccountsRequest, config?: AxiosRequestConfig): Promise<operations.HeadPersonalCurrentAccountsResponse>;
}
