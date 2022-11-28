import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessConnectionStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessConnectionStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessConnectionStatsBandEnum;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessConnectionStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessConnectionStatsPathParams;
    queryParams: GetNetworkWirelessConnectionStatsQueryParams;
}
export declare class GetNetworkWirelessConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
