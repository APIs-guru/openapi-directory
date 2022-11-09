import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum {
    NetworkConnectionStateUnspecified = "NETWORK_CONNECTION_STATE_UNSPECIFIED"
,    Online = "ONLINE"
,    Connected = "CONNECTED"
,    Portal = "PORTAL"
,    Connecting = "CONNECTING"
,    NotConnected = "NOT_CONNECTED"
}

export enum GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED"
,    Cellular = "CELLULAR"
,    Ethernet = "ETHERNET"
,    Tether = "TETHER"
,    Vpn = "VPN"
,    Wifi = "WIFI"
}


// GoogleChromeManagementV1NetworkStatusReport
/** 
 * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
**/
export class GoogleChromeManagementV1NetworkStatusReport extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionState" })
  connectionState?: GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum;

  @Metadata({ data: "json, name=connectionType" })
  connectionType?: GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum;

  @Metadata({ data: "json, name=encryptionOn" })
  encryptionOn?: boolean;

  @Metadata({ data: "json, name=gatewayIpAddress" })
  gatewayIpAddress?: string;

  @Metadata({ data: "json, name=guid" })
  guid?: string;

  @Metadata({ data: "json, name=lanIpAddress" })
  lanIpAddress?: string;

  @Metadata({ data: "json, name=receivingBitRateMbps" })
  receivingBitRateMbps?: string;

  @Metadata({ data: "json, name=reportTime" })
  reportTime?: string;

  @Metadata({ data: "json, name=sampleFrequency" })
  sampleFrequency?: string;

  @Metadata({ data: "json, name=signalStrengthDbm" })
  signalStrengthDbm?: number;

  @Metadata({ data: "json, name=transmissionBitRateMbps" })
  transmissionBitRateMbps?: string;

  @Metadata({ data: "json, name=transmissionPowerDbm" })
  transmissionPowerDbm?: number;

  @Metadata({ data: "json, name=wifiLinkQuality" })
  wifiLinkQuality?: string;

  @Metadata({ data: "json, name=wifiPowerManagementEnabled" })
  wifiPowerManagementEnabled?: boolean;
}
