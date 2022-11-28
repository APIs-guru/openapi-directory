import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CreateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupPolicyId" })
  groupPolicyId: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class CreateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkWirelessSsidIdentityPskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWirelessSsidIdentityPskRequestBody;
}


export class CreateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkWirelessSsidIdentityPsk201ApplicationJsonObject?: Map<string, any>;
}
