import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Configuration {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getConfiguration - Display the configuration of this Open Build Service instance
     *
     * Display the configuration of this Open Build Service instance.
     *
    **/
    getConfiguration(req: operations.GetConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetConfigurationResponse>;
    /**
     * putConfiguration - Update the configuration of this Open Build Service instance
     *
     * Update the configuration of this Open Build Service instance.
     *
     * This is for admins only.
     *
    **/
    putConfiguration(req: operations.PutConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.PutConfigurationResponse>;
}
