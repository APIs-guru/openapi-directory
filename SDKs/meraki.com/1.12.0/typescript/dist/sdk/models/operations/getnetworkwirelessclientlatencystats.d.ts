import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientLatencyStatsPathParams extends SpeakeasyBase {
    clientId: string;
    networkId: string;
}
export declare enum GetNetworkWirelessClientLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessClientLatencyStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessClientLatencyStatsBandEnum;
    fields?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessClientLatencyStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientLatencyStatsPathParams;
    queryParams: GetNetworkWirelessClientLatencyStatsQueryParams;
}
export declare class GetNetworkWirelessClientLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
