import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings
/** 
 * Manual radio settings for 5 GHz.
**/
export class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number;

  @SpeakeasyMetadata({ data: "json, name=channelWidth" })
  channelWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=targetPower" })
  targetPower?: number;
}


// UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings
/** 
 * Manual radio settings for 2.4 GHz.
**/
export class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: number;

  @SpeakeasyMetadata({ data: "json, name=targetPower" })
  targetPower?: number;
}


export class UpdateDeviceWirelessRadioSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;

  @SpeakeasyMetadata({ data: "json, name=rfProfileId" })
  rfProfileId?: number;

  @SpeakeasyMetadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
}


export class UpdateDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceWirelessRadioSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceWirelessRadioSettingsRequestBody;
}


export class UpdateDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
