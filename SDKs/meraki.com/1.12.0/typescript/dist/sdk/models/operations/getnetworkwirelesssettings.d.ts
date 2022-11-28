import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSettingsPathParams;
}
export declare class GetNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
