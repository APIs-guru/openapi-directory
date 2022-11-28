import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow",
    Deny = "deny"
}

export enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp",
    Udp = "udp",
    Icmp = "icmp",
    Any = "any"
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=destCidr" })
  destCidr: string;

  @SpeakeasyMetadata({ data: "json, name=destPort" })
  destPort?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;

  @SpeakeasyMetadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @SpeakeasyMetadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @SpeakeasyMetadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rules", elemType: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules })
  rules?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[];

  @SpeakeasyMetadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
