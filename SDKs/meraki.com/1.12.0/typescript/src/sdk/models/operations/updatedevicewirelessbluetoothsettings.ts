import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: string;
}


export class UpdateDeviceWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=major" })
  major?: number;

  @SpeakeasyMetadata({ data: "json, name=minor" })
  minor?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class UpdateDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDeviceWirelessBluetoothSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateDeviceWirelessBluetoothSettingsRequestBody;
}


export class UpdateDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
