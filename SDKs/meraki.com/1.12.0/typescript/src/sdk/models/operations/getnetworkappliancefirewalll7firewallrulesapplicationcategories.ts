import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams;
}


export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJsonObject?: Map<string, any>;
}
