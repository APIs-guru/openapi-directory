import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkCameraQualityRetentionProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
/** 
 * Quality and resolution for MV12/MV22/MV72 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
/** 
 * Quality and resolution for MV12WE camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
/** 
 * Quality and resolution for MV21/MV71 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum {
    OneThousandTwoHundredAndEightyx720 = "1280x720"
,    OneThousandNineHundredAndTwentyx1080 = "1920x1080"
,    TwoThousandSixHundredAndEightyEightx1512 = "2688x1512"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
/** 
 * Quality and resolution for MV22X/MV72X camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum;
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum {
    Standard = "Standard"
,    Enhanced = "Enhanced"
,    High = "High"
}

export enum CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum {
    OneThousandAndEightyx1080 = "1080x1080"
,    TwoThousandAndFiftyEightx2058 = "2058x2058"
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
/** 
 * Quality and resolution for MV32 camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32 extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum;

  @Metadata({ data: "json, name=resolution" })
  resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum;
}


// CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
/** 
 * Video quality and resolution settings for all the camera models.
**/
export class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=MV12/MV22/MV72" })
  mv12Mv22Mv72?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72;

  @Metadata({ data: "json, name=MV12WE" })
  mv12We?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We;

  @Metadata({ data: "json, name=MV21/MV71" })
  mv21Mv71?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71;

  @Metadata({ data: "json, name=MV22X/MV72X" })
  mv22XMv72X?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X;

  @Metadata({ data: "json, name=MV32" })
  mv32?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32;
}


export class CreateNetworkCameraQualityRetentionProfileRequestBody extends SpeakeasyBase {
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
  name: string;

  @Metadata({ data: "json, name=restrictedBandwidthModeEnabled" })
  restrictedBandwidthModeEnabled?: boolean;

  @Metadata({ data: "json, name=scheduleId" })
  scheduleId?: string;

  @Metadata({ data: "json, name=videoSettings" })
  videoSettings?: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings;
}


export class CreateNetworkCameraQualityRetentionProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkCameraQualityRetentionProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkCameraQualityRetentionProfileRequestBody;
}


export class CreateNetworkCameraQualityRetentionProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkCameraQualityRetentionProfile200ApplicationJsonObject?: Map<string, any>;
}
