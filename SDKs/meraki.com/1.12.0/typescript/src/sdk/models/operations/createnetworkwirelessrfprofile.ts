import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual"
,    Two4ghz = "2.4ghz"
,    Fiveghz = "5ghz"
}


// CreateNetworkWirelessRfProfileRequestBodyApBandSettings
/** 
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export class CreateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandOperationMode" })
  bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;

  @Metadata({ data: "json, name=bandSteeringEnabled" })
  bandSteeringEnabled?: boolean;
}

export enum CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid"
,    Ap = "ap"
}


// CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/** 
 * Settings related to 5Ghz band
**/
export class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelWidth" })
  channelWidth?: string;

  @Metadata({ data: "json, name=maxPower" })
  maxPower?: number;

  @Metadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @Metadata({ data: "json, name=minPower" })
  minPower?: number;

  @Metadata({ data: "json, name=rxsop" })
  rxsop?: number;

  @Metadata({ data: "json, name=validAutoChannels" })
  validAutoChannels?: number[];
}

export enum CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band"
,    Ssid = "ssid"
}


// CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/** 
 * Settings related to 2.4Ghz band
**/
export class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=axEnabled" })
  axEnabled?: boolean;

  @Metadata({ data: "json, name=maxPower" })
  maxPower?: number;

  @Metadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @Metadata({ data: "json, name=minPower" })
  minPower?: number;

  @Metadata({ data: "json, name=rxsop" })
  rxsop?: number;

  @Metadata({ data: "json, name=validAutoChannels" })
  validAutoChannels?: number[];
}


export class CreateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apBandSettings" })
  apBandSettings?: CreateNetworkWirelessRfProfileRequestBodyApBandSettings;

  @Metadata({ data: "json, name=bandSelectionType" })
  bandSelectionType: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;

  @Metadata({ data: "json, name=clientBalancingEnabled" })
  clientBalancingEnabled?: boolean;

  @Metadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;

  @Metadata({ data: "json, name=minBitrateType" })
  minBitrateType?: CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}


export class CreateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkWirelessRfProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWirelessRfProfileRequestBody;
}


export class CreateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkWirelessRfProfile201ApplicationJsonObject?: Map<string, any>;
}
