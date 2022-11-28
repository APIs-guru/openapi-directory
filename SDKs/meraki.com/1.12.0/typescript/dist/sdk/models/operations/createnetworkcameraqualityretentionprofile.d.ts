import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}
/**
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}
/**
 * Quality and resolution for MV12WE camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}
/**
 * Quality and resolution for MV21/MV71 camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}
/**
 * Quality and resolution for MV22X/MV72X camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}
export declare enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}
/**
 * Quality and resolution for MV32 camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}
/**
 * Video quality and resolution settings for all the camera models.
**/
export declare class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
    mv12Mv22Mv72?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;
    mv12We?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;
    mv21Mv71?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;
    mv22XMv72X?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;
    mv32?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}
export declare class CreateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
    audioRecordingEnabled?: boolean;
    cloudArchiveEnabled?: boolean;
    maxRetentionDays?: number;
    motionBasedRetentionEnabled?: boolean;
    motionDetectorVersion?: number;
    name: string;
    restrictedBandwidthModeEnabled?: boolean;
    scheduleId?: string;
    videoSettings?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}
export declare class CreateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
    pathParams: CreateNetworkCameraQualityRetentionProfilePathParams;
    request: CreateNetworkCameraQualityRetentionProfileRequestBody;
}
export declare class CreateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
