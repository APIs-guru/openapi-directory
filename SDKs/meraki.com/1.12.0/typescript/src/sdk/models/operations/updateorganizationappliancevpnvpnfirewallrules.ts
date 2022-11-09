import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=organizationId" })
  organizationId: string;
}

export enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum {
    Allow = "allow"
,    Deny = "deny"
}

export enum UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum {
    Tcp = "tcp"
,    Udp = "udp"
,    Icmp = "icmp"
,    Any = "any"
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=comment" })
  comment?: string;

  @Metadata({ data: "json, name=destCidr" })
  destCidr: string;

  @Metadata({ data: "json, name=destPort" })
  destPort?: string;

  @Metadata({ data: "json, name=policy" })
  policy: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesPolicyEnum;

  @Metadata({ data: "json, name=protocol" })
  protocol: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRulesProtocolEnum;

  @Metadata({ data: "json, name=srcCidr" })
  srcCidr: string;

  @Metadata({ data: "json, name=srcPort" })
  srcPort?: string;

  @Metadata({ data: "json, name=syslogEnabled" })
  syslogEnabled?: boolean;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=rules", elemType: operations.UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules })
  rules?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBodyRules[];

  @Metadata({ data: "json, name=syslogDefaultRule" })
  syslogDefaultRule?: boolean;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateOrganizationApplianceVpnVpnFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateOrganizationApplianceVpnVpnFirewallRulesRequestBody;
}


export class UpdateOrganizationApplianceVpnVpnFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateOrganizationApplianceVpnVpnFirewallRules200ApplicationJsonObject?: Map<string, any>;
}
