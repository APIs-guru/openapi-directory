import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessAirMarshalPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessAirMarshalQueryParams extends SpeakeasyBase {
    t0?: string;
    timespan?: number;
}
export declare class GetNetworkWirelessAirMarshalRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessAirMarshalPathParams;
    queryParams: GetNetworkWirelessAirMarshalQueryParams;
}
export declare class GetNetworkWirelessAirMarshalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessAirMarshal200ApplicationJsonObject?: Map<string, any>;
}
