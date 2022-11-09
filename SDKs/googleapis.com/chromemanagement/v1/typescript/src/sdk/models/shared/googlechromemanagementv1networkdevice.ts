import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1NetworkDeviceTypeEnum {
    NetworkDeviceTypeUnspecified = "NETWORK_DEVICE_TYPE_UNSPECIFIED"
,    CellularDevice = "CELLULAR_DEVICE"
,    EthernetDevice = "ETHERNET_DEVICE"
,    WifiDevice = "WIFI_DEVICE"
}


// GoogleChromeManagementV1NetworkDevice
/** 
 * Details about the network device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportNetworkDeviceConfiguration](https://chromeenterprise.google/policies/#ReportNetworkDeviceConfiguration) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
**/
export class GoogleChromeManagementV1NetworkDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=iccid" })
  iccid?: string;

  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=macAddress" })
  macAddress?: string;

  @Metadata({ data: "json, name=mdn" })
  mdn?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleChromeManagementV1NetworkDeviceTypeEnum;
}
