import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientConnectionStatsPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare enum GetNetworkWirelessClientConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessClientConnectionStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessClientConnectionStatsBandEnum;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessClientConnectionStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientConnectionStatsPathParams;
    queryParams: GetNetworkWirelessClientConnectionStatsQueryParams;
}
export declare class GetNetworkWirelessClientConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
