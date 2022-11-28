import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum {
    Standard = "Standard",
    High = "High",
    Enhanced = "Enhanced"
}
export declare enum UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}
export declare class UpdateDeviceCameraQualityAndRetentionRequestBody extends SpeakeasyBase {
    audioRecordingEnabled?: boolean;
    motionBasedRetentionEnabled?: boolean;
    motionDetectorVersion?: number;
    profileId?: string;
    quality?: UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;
    resolution?: UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;
    restrictedBandwidthModeEnabled?: boolean;
}
export declare class UpdateDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceCameraQualityAndRetentionPathParams;
    request?: UpdateDeviceCameraQualityAndRetentionRequestBody;
}
export declare class UpdateDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
