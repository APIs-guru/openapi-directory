import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessDevicesLatencyStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessDevicesLatencyStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessDevicesLatencyStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessDevicesLatencyStatsBandEnum;
    fields?: string;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessDevicesLatencyStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessDevicesLatencyStatsPathParams;
    queryParams: GetNetworkWirelessDevicesLatencyStatsQueryParams;
}
export declare class GetNetworkWirelessDevicesLatencyStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessDevicesLatencyStats200ApplicationJsonObject?: Map<string, any>;
}
