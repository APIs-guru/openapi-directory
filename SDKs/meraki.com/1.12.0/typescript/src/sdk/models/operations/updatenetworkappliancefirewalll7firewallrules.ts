import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application",
    ApplicationCategory = "applicationCategory",
    Host = "host",
    Port = "port",
    IpRange = "ipRange"
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallL7FirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
