import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @Metadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[];

  @Metadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
