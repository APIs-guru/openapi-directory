import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
    networkId: string;
    rfProfileId: string;
}
export declare enum UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual",
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz"
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export declare class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
    bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
    bandSteeringEnabled?: boolean;
}
export declare enum UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid",
    Ap = "ap"
}
/**
 * Settings related to 5Ghz band
**/
export declare class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
    channelWidth?: string;
    maxPower?: number;
    minBitrate?: number;
    minPower?: number;
    rxsop?: number;
    validAutoChannels?: number[];
}
export declare enum UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}
/**
 * Settings related to 2.4Ghz band
**/
export declare class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
    axEnabled?: boolean;
    maxPower?: number;
    minBitrate?: number;
    minPower?: number;
    rxsop?: number;
    validAutoChannels?: number[];
}
export declare class UpdateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
    apBandSettings?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;
    bandSelectionType?: UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
    clientBalancingEnabled?: boolean;
    fiveGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
    minBitrateType?: UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
    name?: string;
    twoFourGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class UpdateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessRfProfilePathParams;
    request?: UpdateNetworkWirelessRfProfileRequestBody;
}
export declare class UpdateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
