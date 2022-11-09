import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=qualityRetentionProfileId" })
  qualityRetentionProfileId: string;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/** 
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/** 
 * Quality and resolution for MV12WE camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/** 
 * Quality and resolution for MV21/MV71 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
,    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/** 
 * Quality and resolution for MV22X/MV72X camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080"
,    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/** 
 * Quality and resolution for MV32 camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}


// UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/** 
 * Video quality and resolution settings for all the camera models.
**/
export class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=MV12/MV22/MV72" })
  mv12Mv22Mv72?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;

  @Metadata({ data: "json, name=MV12WE" })
  mv12We?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;

  @Metadata({ data: "json, name=MV21/MV71" })
  mv21Mv71?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;

  @Metadata({ data: "json, name=MV22X/MV72X" })
  mv22XMv72X?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;

  @Metadata({ data: "json, name=MV32" })
  mv32?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}


export class UpdateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=audioRecordingEnabled" })
  audioRecordingEnabled?: boolean;

  @Metadata({ data: "json, name=cloudArchiveEnabled" })
  cloudArchiveEnabled?: boolean;

  @Metadata({ data: "json, name=maxRetentionDays" })
  maxRetentionDays?: number;

  @Metadata({ data: "json, name=motionBasedRetentionEnabled" })
  motionBasedRetentionEnabled?: boolean;

  @Metadata({ data: "json, name=motionDetectorVersion" })
  motionDetectorVersion?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;

  @Metadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @Metadata({ data: "json, name=videoSettings" })
  videoSettings?: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}


export class UpdateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCameraQualityRetentionProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCameraQualityRetentionProfileRequestBody;
}


export class UpdateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
