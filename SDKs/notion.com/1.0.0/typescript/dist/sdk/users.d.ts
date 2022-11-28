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
     * retrieveAUser - Retrieve a user
     *
     * Retrieve a user object using the ID specified in the request path.
    **/
    retrieveAUser(req: operations.RetrieveAUserRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveAUserResponse>;
}
