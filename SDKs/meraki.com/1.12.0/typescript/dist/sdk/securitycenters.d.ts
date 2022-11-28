import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SecurityCenters {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceSecurityCenters - List the security centers on a device
     *
     * List the security centers on a device
    **/
    getNetworkSmDeviceSecurityCenters(req: operations.GetNetworkSmDeviceSecurityCentersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceSecurityCentersResponse>;
}
