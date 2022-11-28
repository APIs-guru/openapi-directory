import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessLatencyHistoryPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkWirelessLatencyHistoryAccessCategoryEnum {
    BackgroundTraffic = "backgroundTraffic",
    BestEffortTraffic = "bestEffortTraffic",
    VideoTraffic = "videoTraffic",
    VoiceTraffic = "voiceTraffic"
}
export declare enum GetNetworkWirelessLatencyHistoryBandEnum {
    Two4 = "2.4",
    Five = "5"
}
export declare class GetNetworkWirelessLatencyHistoryQueryParams extends SpeakeasyBase {
    accessCategory?: GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
    apTag?: string;
    autoResolution?: boolean;
    band?: GetNetworkWirelessLatencyHistoryBandEnum;
    clientId?: string;
    deviceSerial?: string;
    resolution?: number;
    ssid?: number;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessLatencyHistoryRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessLatencyHistoryPathParams;
    queryParams: GetNetworkWirelessLatencyHistoryQueryParams;
}
export declare class GetNetworkWirelessLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessLatencyHistory200ApplicationJsonObject?: Map<string, any>;
}
