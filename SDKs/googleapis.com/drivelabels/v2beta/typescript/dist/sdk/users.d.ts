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
     * drivelabelsUsersGetCapabilities - Gets the user capabilities.
    **/
    drivelabelsUsersGetCapabilities(req: operations.DrivelabelsUsersGetCapabilitiesRequest, config?: AxiosRequestConfig): Promise<operations.DrivelabelsUsersGetCapabilitiesResponse>;
}
