import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


export class CreateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupPolicyId" })
  groupPolicyId: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=passphrase" })
  passphrase?: string;
}


export class CreateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkWirelessSsidIdentityPskPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkWirelessSsidIdentityPskRequestBody;
}


export class CreateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkWirelessSsidIdentityPsk201ApplicationJsonObject?: Map<string, any>;
}
