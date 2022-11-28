import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resellernotify {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * resellerResellernotifyGetwatchdetails - Returns all the details of the watch corresponding to the reseller.
    **/
    resellerResellernotifyGetwatchdetails(req: operations.ResellerResellernotifyGetwatchdetailsRequest, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyGetwatchdetailsResponse>;
    /**
     * resellerResellernotifyRegister - Registers a Reseller for receiving notifications.
    **/
    resellerResellernotifyRegister(req: operations.ResellerResellernotifyRegisterRequest, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyRegisterResponse>;
    /**
     * resellerResellernotifyUnregister - Unregisters a Reseller for receiving notifications.
    **/
    resellerResellernotifyUnregister(req: operations.ResellerResellernotifyUnregisterRequest, config?: AxiosRequestConfig): Promise<operations.ResellerResellernotifyUnregisterResponse>;
}
