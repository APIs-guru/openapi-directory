import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}

export enum UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual",
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz"
}


// UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
/** 
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandOperationMode" })
  bandOperationMode?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=bandSteeringEnabled" })
  bandSteeringEnabled?: boolean;
}

export enum UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid",
    Ap = "ap"
}


// UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/** 
 * Settings related to 5Ghz band
**/
export class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelWidth" })
  channelWidth?: string;

  @SpeakeasyMetadata({ data: "json, name=maxPower" })
  maxPower?: number;

  @SpeakeasyMetadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=minPower" })
  minPower?: number;

  @SpeakeasyMetadata({ data: "json, name=rxsop" })
  rxsop?: number;

  @SpeakeasyMetadata({ data: "json, name=validAutoChannels" })
  validAutoChannels?: number[];
}

export enum UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}


// UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/** 
 * Settings related to 2.4Ghz band
**/
export class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=axEnabled" })
  axEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxPower" })
  maxPower?: number;

  @SpeakeasyMetadata({ data: "json, name=minBitrate" })
  minBitrate?: number;

  @SpeakeasyMetadata({ data: "json, name=minPower" })
  minPower?: number;

  @SpeakeasyMetadata({ data: "json, name=rxsop" })
  rxsop?: number;

  @SpeakeasyMetadata({ data: "json, name=validAutoChannels" })
  validAutoChannels?: number[];
}


export class UpdateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apBandSettings" })
  apBandSettings?: UpdateNetworkWirelessRfProfileRequestBodyApBandSettings;

  @SpeakeasyMetadata({ data: "json, name=bandSelectionType" })
  bandSelectionType?: UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=clientBalancingEnabled" })
  clientBalancingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;

  @SpeakeasyMetadata({ data: "json, name=minBitrateType" })
  minBitrateType?: UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}


export class UpdateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessRfProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessRfProfileRequestBody;
}


export class UpdateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
