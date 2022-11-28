import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum {
    Combined = "combined",
    Redundant = "redundant",
    UseNetworkSetting = "useNetworkSetting"
}
export declare class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions extends SpeakeasyBase {
    powerType: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum;
    serial: string;
}
export declare class UpdateNetworkSwitchSettingsRequestBody extends SpeakeasyBase {
    powerExceptions?: UpdateNetworkSwitchSettingsRequestBodyPowerExceptions[];
    useCombinedPower?: boolean;
    vlan?: number;
}
export declare class UpdateNetworkSwitchSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchSettingsPathParams;
    request?: UpdateNetworkSwitchSettingsRequestBody;
}
export declare class UpdateNetworkSwitchSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchSettings200ApplicationJsonObject?: Map<string, any>;
}
