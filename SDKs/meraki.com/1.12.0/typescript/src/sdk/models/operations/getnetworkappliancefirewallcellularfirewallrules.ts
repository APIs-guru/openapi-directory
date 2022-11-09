import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallCellularFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallCellularFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallCellularFirewallRulesPathParams;
}


export class GetNetworkApplianceFirewallCellularFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
