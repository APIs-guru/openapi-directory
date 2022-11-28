import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Rollbacks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkFirmwareUpgradesRollback - Rollback a Firmware Upgrade For A Network
     *
     * Rollback a Firmware Upgrade For A Network
    **/
    createNetworkFirmwareUpgradesRollback(req: operations.CreateNetworkFirmwareUpgradesRollbackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkFirmwareUpgradesRollbackResponse>;
}
