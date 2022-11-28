import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceCameraVideoSettings - Returns video settings for the given camera
     *
     * Returns video settings for the given camera
    **/
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * getDeviceWirelessBluetoothSettings - Return the bluetooth settings for a wireless device
     *
     * Return the bluetooth settings for a wireless device
    **/
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * getDeviceWirelessRadioSettings - Return the radio settings of a device
     *
     * Return the radio settings of a device
    **/
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * getNetworkAlertsSettings - Return the alert configuration for this network
     *
     * Return the alert configuration for this network
    **/
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * getNetworkApplianceSettings - Return the appliance settings for a network
     *
     * Return the appliance settings for a network
    **/
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * getNetworkApplianceVlansSettings - Returns the enabled status of VLANs for the network
     *
     * Returns the enabled status of VLANs for the network
    **/
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
    /**
     * getNetworkSettings - Return the settings for a network
     *
     * Return the settings for a network
    **/
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * getNetworkSwitchSettings - Returns the switch network settings
     *
     * Returns the switch network settings
    **/
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * getNetworkWirelessBluetoothSettings - Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
    **/
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * getNetworkWirelessSettings - Return the wireless settings for a network
     *
     * Return the wireless settings for a network
    **/
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * getNetworkWirelessSsidSplashSettings - Display the splash page settings for the given SSID
     *
     * Display the splash page settings for the given SSID
    **/
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * getOrganizationAdaptivePolicySettings - Returns global adaptive policy settings in an organization
     *
     * Returns global adaptive policy settings in an organization
    **/
    getOrganizationAdaptivePolicySettings(req: operations.GetOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse>;
    /**
     * updateDeviceCameraVideoSettings - Update video settings for the given camera
     *
     * Update video settings for the given camera
    **/
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * updateDeviceWirelessBluetoothSettings - Update the bluetooth settings for a wireless device
     *
     * Update the bluetooth settings for a wireless device
    **/
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * updateDeviceWirelessRadioSettings - Update the radio settings of a device
     *
     * Update the radio settings of a device
    **/
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * updateNetworkAlertsSettings - Update the alert configuration for this network
     *
     * Update the alert configuration for this network
    **/
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
    /**
     * updateNetworkApplianceVlansSettings - Enable/Disable VLANs for the given network
     *
     * Enable/Disable VLANs for the given network
    **/
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
    /**
     * updateNetworkSettings - Update the settings for a network
     *
     * Update the settings for a network
    **/
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * updateNetworkSwitchSettings - Update switch network settings
     *
     * Update switch network settings
    **/
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * updateNetworkWirelessBluetoothSettings - Update the Bluetooth settings for a network
     *
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
    **/
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * updateNetworkWirelessSettings - Update the wireless settings for a network
     *
     * Update the wireless settings for a network
    **/
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
    /**
     * updateNetworkWirelessSsidSplashSettings - Modify the splash page settings for the given SSID
     *
     * Modify the splash page settings for the given SSID
    **/
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * updateOrganizationAdaptivePolicySettings - Update global adaptive policy settings
     *
     * Update global adaptive policy settings
    **/
    updateOrganizationAdaptivePolicySettings(req: operations.UpdateOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse>;
}
