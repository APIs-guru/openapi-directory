import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidSplashSettingsPathParams;
}


export class GetNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
