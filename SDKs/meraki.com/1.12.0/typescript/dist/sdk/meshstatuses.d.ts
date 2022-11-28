import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class MeshStatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessMeshStatuses - List wireless mesh statuses for repeaters
     *
     * List wireless mesh statuses for repeaters
    **/
    getNetworkWirelessMeshStatuses(req: operations.GetNetworkWirelessMeshStatusesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessMeshStatusesResponse>;
}
