import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}

export enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRulesProtocolEnum;
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowLanAccess" })
  allowLanAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules })
  rules?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBodyRules[];
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidFirewallL3FirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidFirewallL3FirewallRulesRequestBody;
}


export class UpdateNetworkWirelessSsidFirewallL3FirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidFirewallL3FirewallRules200ApplicationJsonObject?: Map<string, any>;
}
