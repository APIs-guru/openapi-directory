import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identityPskId" })
  identityPskId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class DeleteNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteNetworkWirelessSsidIdentityPskPathParams;
}


export class DeleteNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
