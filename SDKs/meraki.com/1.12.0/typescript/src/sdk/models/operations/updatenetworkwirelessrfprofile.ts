import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}

export enum UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual"
,    Two4ghz = "2.4ghz"
,    Fiveghz = "5ghz"
}


// UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
/** 
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=bandOperationMode" })
  bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;

  @Metadata({ data: "json, name=bandSteeringEnabled" })
  bandSteeringEnabled?: boolean;
}

export enum UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid"
,    Ap = "ap"
}


// UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/** 
 * Settings related to 5Ghz band
**/
export class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
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

export enum UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band"
,    Ssid = "ssid"
}


// UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/** 
 * Settings related to 2.4Ghz band
**/
export class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
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


export class UpdateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=apBandSettings" })
  apBandSettings?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;

  @Metadata({ data: "json, name=bandSelectionType" })
  bandSelectionType?: UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;

  @Metadata({ data: "json, name=clientBalancingEnabled" })
  clientBalancingEnabled?: boolean;

  @Metadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;

  @Metadata({ data: "json, name=minBitrateType" })
  minBitrateType?: UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}


export class UpdateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessRfProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessRfProfileRequestBody;
}


export class UpdateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
