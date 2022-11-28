import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum {
    NetworkConnectionStateUnspecified = "NETWORK_CONNECTION_STATE_UNSPECIFIED",
    Online = "ONLINE",
    Connected = "CONNECTED",
    Portal = "PORTAL",
    Connecting = "CONNECTING",
    NotConnected = "NOT_CONNECTED"
}
export declare enum GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED",
    Cellular = "CELLULAR",
    Ethernet = "ETHERNET",
    Tether = "TETHER",
    Vpn = "VPN",
    Wifi = "WIFI"
}
/**
 * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
**/
export declare class GoogleChromeManagementV1NetworkStatusReport extends SpeakeasyBase {
    connectionState?: GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum;
    connectionType?: GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum;
    encryptionOn?: boolean;
    gatewayIpAddress?: string;
    guid?: string;
    lanIpAddress?: string;
    receivingBitRateMbps?: string;
    reportTime?: string;
    sampleFrequency?: string;
    signalStrengthDbm?: number;
    transmissionBitRateMbps?: string;
    transmissionPowerDbm?: number;
    wifiLinkQuality?: string;
    wifiPowerManagementEnabled?: boolean;
}
