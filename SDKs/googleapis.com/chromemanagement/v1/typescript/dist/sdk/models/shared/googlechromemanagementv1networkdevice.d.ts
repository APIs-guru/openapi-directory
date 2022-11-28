import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1NetworkDeviceTypeEnum {
    NetworkDeviceTypeUnspecified = "NETWORK_DEVICE_TYPE_UNSPECIFIED",
    CellularDevice = "CELLULAR_DEVICE",
    EthernetDevice = "ETHERNET_DEVICE",
    WifiDevice = "WIFI_DEVICE"
}
/**
 * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export declare class GoogleChromeManagementV1NetworkDevice extends SpeakeasyBase {
    iccid?: string;
    imei?: string;
    macAddress?: string;
    mdn?: string;
    meid?: string;
    type?: GoogleChromeManagementV1NetworkDeviceTypeEnum;
}
