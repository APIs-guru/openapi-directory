import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum {
    Dual = "dual",
    Two4ghz = "2.4ghz",
    Fiveghz = "5ghz"
}


// CreateNetworkWirelessRfProfileRequestBodyApBandSettings
/** 
 * Settings that will be enabled if selectionType is set to 'ap'.
**/
export class CreateNetworkWirelessRfProfileRequestBodyApBandSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bandOperationMode" })
  bandOperationMode?: CreateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=bandSteeringEnabled" })
  bandSteeringEnabled?: boolean;
}

export enum CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum {
    Ssid = "ssid",
    Ap = "ap"
}


// CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
/** 
 * Settings related to 5Ghz band
**/
export class CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings extends SpeakeasyBase {
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

export enum CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum {
    Band = "band",
    Ssid = "ssid"
}


// CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
/** 
 * Settings related to 2.4Ghz band
**/
export class CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
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


export class CreateNetworkWirelessRfProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=apBandSettings" })
  apBandSettings?: CreateNetworkWirelessRfProfileRequestBodyApBandSettings;

  @SpeakeasyMetadata({ data: "json, name=bandSelectionType" })
  bandSelectionType: CreateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=clientBalancingEnabled" })
  clientBalancingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyFiveGhzSettings;

  @SpeakeasyMetadata({ data: "json, name=minBitrateType" })
  minBitrateType?: CreateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: CreateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings;
}


export class CreateNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkWirelessRfProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWirelessRfProfileRequestBody;
}


export class CreateNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkWirelessRfProfile201ApplicationJsonObject?: Map<string, any>;
}
