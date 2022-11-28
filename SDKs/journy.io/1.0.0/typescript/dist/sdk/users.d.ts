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
     * link - Link web activity to user
     *
     * Endpoint used to link web activity to a user.
    **/
    link(req: operations.LinkRequest, config?: AxiosRequestConfig): Promise<operations.LinkResponse>;
    /**
     * upsertUser - Create or update user
     *
     * Endpoint to create or update a user.
    **/
    upsertUser(req: operations.UpsertUserRequest, config?: AxiosRequestConfig): Promise<operations.UpsertUserResponse>;
}
