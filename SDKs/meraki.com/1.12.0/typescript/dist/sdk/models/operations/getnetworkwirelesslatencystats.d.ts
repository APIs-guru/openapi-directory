import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessLatencyStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessLatencyStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessLatencyStatsBandEnum;
    fields?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessLatencyStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessLatencyStatsPathParams;
    queryParams: GetNetworkWirelessLatencyStatsQueryParams;
}
export declare class GetNetworkWirelessLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
