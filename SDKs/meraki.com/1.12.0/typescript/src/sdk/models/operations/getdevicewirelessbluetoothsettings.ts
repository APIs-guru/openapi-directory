import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDeviceWirelessBluetoothSettingsPathParams;
}


export class GetDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
