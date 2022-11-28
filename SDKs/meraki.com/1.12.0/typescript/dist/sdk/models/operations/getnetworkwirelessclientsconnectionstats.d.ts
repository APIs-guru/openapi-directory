import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientsConnectionStatsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessClientsConnectionStatsBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessClientsConnectionStatsQueryParams extends SpeakeasyBase {
    apTag?: string;
    band?: GetNetworkWirelessClientsConnectionStatsBandEnum;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
    vlan?: number;
}
export declare class GetNetworkWirelessClientsConnectionStatsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientsConnectionStatsPathParams;
    queryParams: GetNetworkWirelessClientsConnectionStatsQueryParams;
}
export declare class GetNetworkWirelessClientsConnectionStatsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientsConnectionStats200ApplicationJsonObject?: Map<string, any>;
}
