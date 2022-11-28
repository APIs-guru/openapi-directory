import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessSsidsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidsPathParams;
}
export declare class GetNetworkWirelessSsidsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsids200ApplicationJsonObject?: Map<string, any>;
}
