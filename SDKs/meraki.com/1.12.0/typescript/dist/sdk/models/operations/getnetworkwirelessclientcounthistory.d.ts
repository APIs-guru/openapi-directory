import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessClientCountHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessClientCountHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessClientCountHistoryQueryParams extends SpeakeasyBase {
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessClientCountHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessClientCountHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessClientCountHistoryPathParams;
    queryParams: GetNetworkWirelessClientCountHistoryQueryParams;
}
export declare class GetNetworkWirelessClientCountHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessClientCountHistory200ApplicationJsonObject?: Map<string, any>;
}
