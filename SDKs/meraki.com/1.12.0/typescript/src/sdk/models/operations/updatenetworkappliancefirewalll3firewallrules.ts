import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @Metadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[];

  @Metadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallL3FirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
