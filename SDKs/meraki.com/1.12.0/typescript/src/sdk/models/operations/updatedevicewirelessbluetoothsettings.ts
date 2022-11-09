import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=major" })
  major?: number;

  @Metadata({ data: "json, name=minor" })
  minor?: number;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDeviceWirelessBluetoothSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceWirelessBluetoothSettingsRequestBody;
}


export class UpdateDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
