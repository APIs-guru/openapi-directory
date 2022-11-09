import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}

export enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @Metadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules })
  rules?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBodyRules[];
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkApplianceFirewallCellularFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkApplianceFirewallCellularFirewallRulesRequestBody;
}


export class UpdateNetworkApplianceFirewallCellularFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkApplianceFirewallCellularFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
