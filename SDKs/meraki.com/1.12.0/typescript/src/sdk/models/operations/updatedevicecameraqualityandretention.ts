import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum {
    Standard = "Standard",
    High = "High",
    Enhanced = "Enhanced"
}

export enum UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


export class UpdateDeviceCameraQualityAndRetentionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioRecordingEnabled" })
  audioRecordingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=motionBasedRetentionEnabled" })
  motionBasedRetentionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=motionDetectorVersion" })
  motionDetectorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=profileId" })
  profileId?: string;

  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;

  @SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;
}


export class UpdateDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceCameraQualityAndRetentionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraQualityAndRetentionRequestBody;
}


export class UpdateDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
