import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientConnectivityEventsPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare enum GetNetworkWirelessClientConnectivityEventsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare enum GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum {
    Good = "good",
    Info = "info",
    Warn = "warn",
    Bad = "bad"
}
export declare enum GetNetworkWirelessClientConnectivityEventsTypesEnum {
    Assoc = "assoc",
    Disassoc = "disassoc",
    Auth = "auth",
    Deauth = "deauth",
    Dns = "dns",
    Dhcp = "dhcp",
    Roam = "roam",
    Connection = "connection",
    Sticky = "sticky"
}
export declare class GetNetworkWirelessClientConnectivityEventsQueryParams extends SpeakeasyBase {
    band?: GetNetworkWirelessClientConnectivityEventsBandEnum;
    deviceSerial?: string;
    endingBefore?: string;
    includedSeverities?: GetNetworkWirelessClientConnectivityEventsIncludedSeveritiesEnum[];
    perPage?: number;
    ssidNumber?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
    types?: GetNetworkWirelessClientConnectivityEventsTypesEnum[];
}
export declare class GetNetworkWirelessClientConnectivityEventsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientConnectivityEventsPathParams;
    queryParams: GetNetworkWirelessClientConnectivityEventsQueryParams;
}
export declare class GetNetworkWirelessClientConnectivityEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getNetworkWirelessClientConnectivityEvents200ApplicationJsonObject?: Map<string, any>;
}
