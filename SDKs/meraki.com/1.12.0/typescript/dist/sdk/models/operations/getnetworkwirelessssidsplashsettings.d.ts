import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidSplashSettingsPathParams;
}
export declare class GetNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
