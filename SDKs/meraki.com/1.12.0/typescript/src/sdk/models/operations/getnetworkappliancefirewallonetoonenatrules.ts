import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallOneToOneNatRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallOneToOneNatRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallOneToOneNatRulesPathParams;
}


export class GetNetworkApplianceFirewallOneToOneNatRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallOneToOneNatRules200ApplicationJsonObject?: Map<string, any>;
}
