import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


// UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings
/** 
 * Manual radio settings for 5 GHz.
**/
export class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: number;

  @Metadata({ data: "json, name=channelWidth" })
  channelWidth?: number;

  @Metadata({ data: "json, name=targetPower" })
  targetPower?: number;
}


// UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings
/** 
 * Manual radio settings for 2.4 GHz.
**/
export class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: number;

  @Metadata({ data: "json, name=targetPower" })
  targetPower?: number;
}


export class UpdateDeviceWirelessRadioSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=fiveGhzSettings" })
  fiveGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;

  @Metadata({ data: "json, name=rfProfileId" })
  rfProfileId?: number;

  @Metadata({ data: "json, name=twoFourGhzSettings" })
  twoFourGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
}


export class UpdateDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceWirelessRadioSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceWirelessRadioSettingsRequestBody;
}


export class UpdateDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
