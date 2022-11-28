import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class LldpCdp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceLldpCdp - List LLDP and CDP information for a device
     *
     * List LLDP and CDP information for a device
    **/
    getDeviceLldpCdp(req: operations.GetDeviceLldpCdpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceLldpCdpResponse>;
}
