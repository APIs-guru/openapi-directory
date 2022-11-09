import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallL7FirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum {
    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum {
    Application = "application"
,    ApplicationCategory = "applicationCategory"
,    Host = "host"
,    Port = "port"
,    IpRange = "ipRange"
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=type" })
  type?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRulesTypeEnum;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallL7FirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallL7FirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallL7FirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallL7FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
