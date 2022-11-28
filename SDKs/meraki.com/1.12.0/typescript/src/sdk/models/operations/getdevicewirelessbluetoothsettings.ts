import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class GetDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeviceWirelessBluetoothSettingsPathParams;
}


export class GetDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
