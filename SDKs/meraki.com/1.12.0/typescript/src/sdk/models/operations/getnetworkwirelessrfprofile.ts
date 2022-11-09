import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessRfProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rfProfileId" })
  rfProfileId: string;
}


export class GetNetworkWirelessRfProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessRfProfilePathParams;
}


export class GetNetworkWirelessRfProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessRfProfile200ApplicationJsonObject?: Map<string, any>;
}
