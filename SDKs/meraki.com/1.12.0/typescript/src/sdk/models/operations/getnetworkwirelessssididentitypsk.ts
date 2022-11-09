import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identityPskId" })
  identityPskId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class GetNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkWirelessSsidIdentityPskPathParams;
}


export class GetNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkWirelessSsidIdentityPsk200ApplicationJsonObject?: Map<string, any>;
}
