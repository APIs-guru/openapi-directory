import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=identityPskId" })
  identityPskId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class UpdateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class UpdateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidIdentityPskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidIdentityPskRequestBody;
}


export class UpdateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidIdentityPsk200ApplicationJsonObject?: Map<string, any>;
}
