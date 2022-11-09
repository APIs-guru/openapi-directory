import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallOneToManyNatRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallOneToManyNatRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallOneToManyNatRulesPathParams;
}


export class GetNetworkApplianceFirewallOneToManyNatRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallOneToManyNatRules200ApplicationJsonObject?: Map<string, any>;
}
