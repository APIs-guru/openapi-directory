import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowLanAccess" })
  allowLanAccess?: boolean;

  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
