import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identityPskId" })
  identityPskId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class DeleteNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteNetworkWirelessSsidIdentityPskPathParams;
}


export class DeleteNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
