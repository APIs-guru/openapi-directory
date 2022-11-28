import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams;
}


export class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getNetworkApplianceFirewallL7FirewallRulesApplicationCategories200ApplicationJsonObject?: Map<string, any>;
}
