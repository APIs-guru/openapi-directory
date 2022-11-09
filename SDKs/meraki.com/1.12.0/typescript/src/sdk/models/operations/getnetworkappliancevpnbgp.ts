import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceVpnBgpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceVpnBgpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceVpnBgpPathParams;
}


export class GetNetworkApplianceVpnBgpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceVpnBgp200ApplicationJsonObject?: Map<string, any>;
}
