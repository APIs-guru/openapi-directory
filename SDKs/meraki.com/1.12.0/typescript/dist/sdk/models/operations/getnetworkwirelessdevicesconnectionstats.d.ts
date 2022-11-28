import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessDevicesConnectionStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessDevicesConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessDevicesConnectionStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessDevicesConnectionStatsBandEnum;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessDevicesConnectionStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessDevicesConnectionStatsPathParams;
    queryParams: GetNetworkWirelessDevicesConnectionStatsQueryParams;
}
export declare class GetNetworkWirelessDevicesConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessDevicesConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
