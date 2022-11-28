import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @SpeakeasyMetadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBodyRules[];

  @SpeakeasyMetadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallInboundFirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallInboundFirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallInboundFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallInboundFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
