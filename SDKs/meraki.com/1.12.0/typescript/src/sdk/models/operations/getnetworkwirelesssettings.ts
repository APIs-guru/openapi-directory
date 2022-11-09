import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkWirelessSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSettingsPathParams;
}


export class GetNetworkWirelessSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSettings200ApplicationJsonObject?: Map<string, any>;
}
