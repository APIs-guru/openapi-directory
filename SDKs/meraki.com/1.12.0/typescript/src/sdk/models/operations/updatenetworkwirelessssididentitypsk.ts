import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=identityPskId" })
  identityPskId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class UpdateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class UpdateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidIdentityPskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidIdentityPskRequestBody;
}


export class UpdateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidIdentityPsk200ApplicationJsonObject?: Map<string, any>;
}
