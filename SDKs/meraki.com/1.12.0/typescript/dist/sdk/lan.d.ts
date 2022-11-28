import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Lan {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCellularGatewayLan - Show the LAN Settings of a MG
     *
     * Show the LAN Settings of a MG
    **/
    getDeviceCellularGatewayLan(req: operations.GetDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCellularGatewayLanResponse>;
    /**
     * updateDeviceCellularGatewayLan - Update the LAN Settings for a single MG.
     *
     * Update the LAN Settings for a single MG.
    **/
    updateDeviceCellularGatewayLan(req: operations.UpdateDeviceCellularGatewayLanRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCellularGatewayLanResponse>;
}
