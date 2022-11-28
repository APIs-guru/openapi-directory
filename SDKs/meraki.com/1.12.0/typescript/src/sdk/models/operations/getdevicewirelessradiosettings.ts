import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceWirelessRadioSettingsPathParams;
}


export class GetDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
