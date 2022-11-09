import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessBluetoothSettingsPathParams;
}


export class GetNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
