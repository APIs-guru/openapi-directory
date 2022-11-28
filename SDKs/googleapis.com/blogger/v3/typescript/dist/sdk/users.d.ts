import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * bloggerUsersGet - Gets one user by user_id.
    **/
    bloggerUsersGet(req: operations.BloggerUsersGetRequest, config?: AxiosRequestConfig): Promise<operations.BloggerUsersGetResponse>;
}
