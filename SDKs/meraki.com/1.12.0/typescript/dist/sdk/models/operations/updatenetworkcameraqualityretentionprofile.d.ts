import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
    networkId: string;
    qualityRetentionProfileId: string;
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}
/**
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}
/**
 * Quality and resolution for MV12WE camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}
/**
 * Quality and resolution for MV21/MV71 camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}
/**
 * Quality and resolution for MV22X/MV72X camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}
/**
 * Quality and resolution for MV32 camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}
/**
 * Video quality and resolution settings for all the camera models.
**/
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
    mv12Mv22Mv72?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
    mv12We?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
    mv21Mv71?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
    mv22XMv72X?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
    mv32?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}
export declare class UpdateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
    audioRecordingEnabled?: boolean;
    cloudArchiveEnabled?: boolean;
    maxRetentionDays?: number;
    motionBasedRetentionEnabled?: boolean;
    motionDetectorVersion?: number;
    name?: string;
    restrictedBandwidthModeEnabled?: boolean;
    scheduleId?: string;
    videoSettings?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}
export declare class UpdateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCameraQualityRetentionProfilePathParams;
    request?: UpdateNetworkCameraQualityRetentionProfileRequestBody;
}
export declare class UpdateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
