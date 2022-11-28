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
     * globalConfig - Get the full configuration of Otoroshi
     *
     * Get the full configuration of Otoroshi
    **/
    globalConfig(req: operations.GlobalConfigRequest, config?: AxiosRequestConfig): Promise<operations.GlobalConfigResponse>;
    /**
     * patchGlobalConfig - Update the global configuration with a diff
     *
     * Update the global configuration with a diff
    **/
    patchGlobalConfig(req: operations.PatchGlobalConfigRequest, config?: AxiosRequestConfig): Promise<operations.PatchGlobalConfigResponse>;
    /**
     * putGlobalConfig - Update the global configuration
     *
     * Update the global configuration
    **/
    putGlobalConfig(req: operations.PutGlobalConfigRequest, config?: AxiosRequestConfig): Promise<operations.PutGlobalConfigResponse>;
}
