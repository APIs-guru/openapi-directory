import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @SpeakeasyMetadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBodyRules[];

  @SpeakeasyMetadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallL3FirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallL3FirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallL3FirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
