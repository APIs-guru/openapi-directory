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
     * getNetworkSmUserDeviceProfiles - Get the profiles associated with a user
     *
     * Get the profiles associated with a user
    **/
    getNetworkSmUserDeviceProfiles(req: operations.GetNetworkSmUserDeviceProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserDeviceProfilesResponse>;
    /**
     * getNetworkSmUserSoftwares - Get a list of softwares associated with a user
     *
     * Get a list of softwares associated with a user
    **/
    getNetworkSmUserSoftwares(req: operations.GetNetworkSmUserSoftwaresRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUserSoftwaresResponse>;
    /**
     * getNetworkSmUsers - List the owners in an SM network with various specified fields and filters
     *
     * List the owners in an SM network with various specified fields and filters
    **/
    getNetworkSmUsers(req: operations.GetNetworkSmUsersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmUsersResponse>;
}
