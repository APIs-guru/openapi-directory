import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CreateUser {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createUserInGroup - Create User in Group
     *
     * Create User in Group
    **/
    createUserInGroup(req: operations.CreateUserInGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserInGroupResponse>;
}
