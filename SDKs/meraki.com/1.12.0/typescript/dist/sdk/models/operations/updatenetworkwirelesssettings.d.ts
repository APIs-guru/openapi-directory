import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum {
    MinimizeUpgradeTime = "minimizeUpgradeTime",
    MinimizeClientDowntime = "minimizeClientDowntime"
}
export declare class UpdateNetworkWirelessSettingsRequestBody extends SpeakeasyBase {
    ipv6BridgeEnabled?: boolean;
    ledLightsOn?: boolean;
    locationAnalyticsEnabled?: boolean;
    meshingEnabled?: boolean;
    upgradeStrategy?: UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum;
}
export declare class UpdateNetworkWirelessSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSettingsPathParams;
    request?: UpdateNetworkWirelessSettingsRequestBody;
}
export declare class UpdateNetworkWirelessSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
