import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bluetooth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceWirelessBluetoothSettings - Return the bluetooth settings for a wireless device
     *
     * Return the bluetooth settings for a wireless device
    **/
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * getNetworkWirelessBluetoothSettings - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
    **/
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * updateDeviceWirelessBluetoothSettings - Update the bluetooth settings for a wireless device
     *
     * Update the bluetooth settings for a wireless device
    **/
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * updateNetworkWirelessBluetoothSettings - Update the Bluetooth settings for a network
     *
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
    **/
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
}
