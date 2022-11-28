import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessChannelUtilizationHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessChannelUtilizationHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessChannelUtilizationHistoryQueryParams extends SpeakeasyBase {
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessChannelUtilizationHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessChannelUtilizationHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessChannelUtilizationHistoryPathParams;
    queryParams: GetNetworkWirelessChannelUtilizationHistoryQueryParams;
}
export declare class GetNetworkWirelessChannelUtilizationHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessChannelUtilizationHistory200ApplicationJsonObject?: Map<string, any>;
}
