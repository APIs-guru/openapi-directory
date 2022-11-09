import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSwitchDhcpServerPolicyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSwitchDhcpServerPolicyPathParams;
}


export class GetNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSwitchDhcpServerPolicy200ApplicationJsonObject?: Map<string, any>;
}
