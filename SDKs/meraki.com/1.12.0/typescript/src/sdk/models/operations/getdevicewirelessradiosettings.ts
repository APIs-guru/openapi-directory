import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceWirelessRadioSettingsPathParams;
}


export class GetDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
