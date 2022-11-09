import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceCameraQualityAndRetentionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}

export enum UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum {
    Standard = "Standard"
,    High = "High"
,    Enhanced = "Enhanced"
}

export enum UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
,    OneThousandAndEightyx1080 = "1080x1080"
,    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


export class UpdateDeviceCameraQualityAndRetentionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioRecordingEnabled" })
  audioRecordingEnabled?: boolean;

  @Metadata({ data: "json, name=motionBasedRetentionEnabled" })
  motionBasedRetentionEnabled?: boolean;

  @Metadata({ data: "json, name=motionDetectorVersion" })
  motionDetectorVersion?: number;

  @Metadata({ data: "json, name=profileId" })
  profileId?: string;

  @Metadata({ data: "json, name=quality" })
  quality?: UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution?: UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum;

  @Metadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;
}


export class UpdateDeviceCameraQualityAndRetentionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceCameraQualityAndRetentionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceCameraQualityAndRetentionRequestBody;
}


export class UpdateDeviceCameraQualityAndRetentionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceCameraQualityAndRetention200ApplicationJsonObject?: Map<string, any>;
}
