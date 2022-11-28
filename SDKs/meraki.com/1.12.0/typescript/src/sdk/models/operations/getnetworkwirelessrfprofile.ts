import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}


export class GetNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkWirelessRfProfilePathParams;
}


export class GetNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
