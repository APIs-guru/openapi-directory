import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessSettingsPathParams;
}


export class GetNetworkWirelessSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
