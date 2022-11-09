import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallInboundFirewallRulesPathParams;
}


export class GetNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
