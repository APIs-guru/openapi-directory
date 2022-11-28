import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceFirewallInboundFirewallRulesPathParams;
}


export class GetNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
