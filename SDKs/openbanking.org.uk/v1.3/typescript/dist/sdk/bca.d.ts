import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bca {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBusinessCurrentAccounts - Gets a list of all `Branch Current Account` objects.
    **/
    getBusinessCurrentAccounts(req: operations.GetBusinessCurrentAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetBusinessCurrentAccountsResponse>;
    /**
     * headBusinessCurrentAccounts - Gets header information on the current set of `Business Current Account` data
    **/
    headBusinessCurrentAccounts(req: operations.HeadBusinessCurrentAccountsRequest, config?: AxiosRequestConfig): Promise<operations.HeadBusinessCurrentAccountsResponse>;
}
