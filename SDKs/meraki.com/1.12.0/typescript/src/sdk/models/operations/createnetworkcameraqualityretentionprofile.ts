import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/** 
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/** 
 * Quality and resolution for MV12WE camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/** 
 * Quality and resolution for MV21/MV71 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/** 
 * Quality and resolution for MV22X/MV72X camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/** 
 * Quality and resolution for MV32 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/** 
 * Video quality and resolution settings for all the camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MV12/MV22/MV72" })
  mv12Mv22Mv72?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;

  @SpeakeasyMetadata({ data: "json, name=MV12WE" })
  mv12We?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;

  @SpeakeasyMetadata({ data: "json, name=MV21/MV71" })
  mv21Mv71?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;

  @SpeakeasyMetadata({ data: "json, name=MV22X/MV72X" })
  mv22XMv72X?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;

  @SpeakeasyMetadata({ data: "json, name=MV32" })
  mv32?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}


export class CreateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audioRecordingEnabled" })
  audioRecordingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cloudArchiveEnabled" })
  cloudArchiveEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxRetentionDays" })
  maxRetentionDays?: number;

  @SpeakeasyMetadata({ data: "json, name=motionBasedRetentionEnabled" })
  motionBasedRetentionEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=motionDetectorVersion" })
  motionDetectorVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoSettings" })
  videoSettings?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}


export class CreateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkCameraQualityRetentionProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkCameraQualityRetentionProfileRequestBody;
}


export class CreateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
