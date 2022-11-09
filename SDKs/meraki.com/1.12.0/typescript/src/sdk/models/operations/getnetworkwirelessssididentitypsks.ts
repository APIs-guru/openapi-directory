import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidIdentityPsksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidIdentityPsksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidIdentityPsksPathParams;
}


export class GetNetworkWirelessSsidIdentityPsksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidIdentityPsks200ApplicationJsonObject?: Map<string, any>;
}
