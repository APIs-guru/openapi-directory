import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Snowmonkey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSnowMonkeyConfig - Get current Snow Monkey config
     *
     * Get current Snow Monkey config
    **/
    getSnowMonkeyConfig(req: operations.GetSnowMonkeyConfigRequest, config?: AxiosRequestConfig): Promise<operations.GetSnowMonkeyConfigResponse>;
    /**
     * getSnowMonkeyOutages - Get all current Snow Monkey ourages
     *
     * Get all current Snow Monkey ourages
    **/
    getSnowMonkeyOutages(req: operations.GetSnowMonkeyOutagesRequest, config?: AxiosRequestConfig): Promise<operations.GetSnowMonkeyOutagesResponse>;
    /**
     * patchSnowMonkey - Update current Snow Monkey config
     *
     * Update current Snow Monkey config
    **/
    patchSnowMonkey(req: operations.PatchSnowMonkeyRequest, config?: AxiosRequestConfig): Promise<operations.PatchSnowMonkeyResponse>;
    /**
     * resetSnowMonkey - Reset Snow Monkey Outages for the day
     *
     * Reset Snow Monkey Outages for the day
    **/
    resetSnowMonkey(req: operations.ResetSnowMonkeyRequest, config?: AxiosRequestConfig): Promise<operations.ResetSnowMonkeyResponse>;
    /**
     * startSnowMonkey - Start the Snow Monkey
     *
     * Start the Snow Monkey
    **/
    startSnowMonkey(req: operations.StartSnowMonkeyRequest, config?: AxiosRequestConfig): Promise<operations.StartSnowMonkeyResponse>;
    /**
     * stopSnowMonkey - Stop the Snow Monkey
     *
     * Stop the Snow Monkey
    **/
    stopSnowMonkey(req: operations.StopSnowMonkeyRequest, config?: AxiosRequestConfig): Promise<operations.StopSnowMonkeyResponse>;
    /**
     * updateSnowMonkey - Update current Snow Monkey config
     *
     * Update current Snow Monkey config
    **/
    updateSnowMonkey(req: operations.UpdateSnowMonkeyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSnowMonkeyResponse>;
}
