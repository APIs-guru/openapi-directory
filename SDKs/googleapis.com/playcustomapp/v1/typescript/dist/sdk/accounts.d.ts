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
     * playcustomappAccountsCustomAppsCreate - Creates a new custom app.
    **/
    playcustomappAccountsCustomAppsCreate(req: operations.PlaycustomappAccountsCustomAppsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PlaycustomappAccountsCustomAppsCreateResponse>;
}
