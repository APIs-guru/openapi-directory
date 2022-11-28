import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @SpeakeasyMetadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
