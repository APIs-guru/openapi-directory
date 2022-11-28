import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual",
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz"
}
/**
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export declare class CreateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
    bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;
    bandSteeringEnabled?: boolean;
}
export declare enum CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid",
    Ap = "ap"
}
/**
 * Settings related to 5Ghz band
**/
export declare class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
    channelWidth?: string;
    maxPower?: number;
    minBitrate?: number;
    minPower?: number;
    rxsop?: number;
    validAutoChannels?: number[];
}
export declare enum CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}
/**
 * Settings related to 2.4Ghz band
**/
export declare class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
    axEnabled?: boolean;
    maxPower?: number;
    minBitrate?: number;
    minPower?: number;
    rxsop?: number;
    validAutoChannels?: number[];
}
export declare class CreateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
    apBandSettings?: CreateNetworkWirelessRfProfileRequestBodyApBandSettings;
    bandSelectionType: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;
    clientBalancingEnabled?: boolean;
    fiveGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;
    minBitrateType?: CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;
    name: string;
    twoFourGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}
export declare class CreateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    pathParams: CreateNetworkWirelessRfProfilePathParams;
    request: CreateNetworkWirelessRfProfileRequestBody;
}
export declare class CreateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkWirelessRfProfile201ApplicationJsonObject?: Map<string, any>;
}
