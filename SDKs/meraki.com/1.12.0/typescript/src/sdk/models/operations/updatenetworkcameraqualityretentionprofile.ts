import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" })
  qualityRetentionProfileId: string;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/** 
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/** 
 * Quality and resolution for MV12WE camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/** 
 * Quality and resolution for MV21/MV71 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720",
    OneThousandNineHundredAndTwentyx1080 = "1920x1080",
    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/** 
 * Quality and resolution for MV22X/MV72X camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard",
    Enhanced = "Enhanced",
    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080",
    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/** 
 * Quality and resolution for MV32 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/** 
 * Video quality and resolution settings for all the camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MV12/MV22/MV72" })
  mv12Mv22Mv72?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;

  @SpeakeasyMetadata({ data: "json, name=MV12WE" })
  mv12We?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;

  @SpeakeasyMetadata({ data: "json, name=MV21/MV71" })
  mv21Mv71?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;

  @SpeakeasyMetadata({ data: "json, name=MV22X/MV72X" })
  mv22XMv72X?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;

  @SpeakeasyMetadata({ data: "json, name=MV32" })
  mv32?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}


export class UpdateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
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
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @SpeakeasyMetadata({ data: "json, name=videoSettings" })
  videoSettings?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}


export class UpdateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCameraQualityRetentionProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCameraQualityRetentionProfileRequestBody;
}


export class UpdateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
