import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientsLatencyStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessClientsLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessClientsLatencyStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessClientsLatencyStatsBandEnum;
    fields?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessClientsLatencyStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientsLatencyStatsPathParams;
    queryParams: GetNetworkWirelessClientsLatencyStatsQueryParams;
}
export declare class GetNetworkWirelessClientsLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientsLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
