import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessSsidSplashSettingsPathParams;
}


export class GetNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
