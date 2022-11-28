import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FirmwareUpgrades {
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
    /**
     * getNetworkFirmwareUpgrades - Get firmware upgrade information for a network
     *
     * Get firmware upgrade information for a network
    **/
    getNetworkFirmwareUpgrades(req: operations.GetNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkFirmwareUpgradesResponse>;
    /**
     * updateNetworkFirmwareUpgrades - Update firmware upgrade information for a network
     *
     * Update firmware upgrade information for a network
    **/
    updateNetworkFirmwareUpgrades(req: operations.UpdateNetworkFirmwareUpgradesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkFirmwareUpgradesResponse>;
}
