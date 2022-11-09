import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFIREWALLS_SERVERS = [
	"https://api.linode.com/v4",
];



// CreateFirewallsRequestBodyDevices
/** 
 * Devices to create for this Firewall.
 * When a Device is created, the Firewall is assigned to its associated service.
 * Currently, Devices can only be created for Linode instances.
 * 
**/
export class CreateFirewallsRequestBodyDevices extends SpeakeasyBase {
  @Metadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum CreateFirewallsRequestBodyRulesInboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}

export enum CreateFirewallsRequestBodyRulesOutboundPolicyEnum {
    Accept = "ACCEPT"
,    Drop = "DROP"
}


// CreateFirewallsRequestBodyRules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class CreateFirewallsRequestBodyRules extends SpeakeasyBase {
  @Metadata({ data: "json, name=inbound", elemType: shared.FirewallRuleConfig })
  inbound?: shared.FirewallRuleConfig[];

  @Metadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: CreateFirewallsRequestBodyRulesInboundPolicyEnum;

  @Metadata({ data: "json, name=outbound", elemType: shared.FirewallRuleConfig })
  outbound?: shared.FirewallRuleConfig[];

  @Metadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: CreateFirewallsRequestBodyRulesOutboundPolicyEnum;
}

export enum CreateFirewallsRequestBodyStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
,    Deleted = "deleted"
}


export class CreateFirewallsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=devices" })
  devices?: CreateFirewallsRequestBodyDevices;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=rules" })
  rules: CreateFirewallsRequestBodyRules;

  @Metadata({ data: "json, name=status" })
  status?: CreateFirewallsRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}


export class CreateFirewallsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateFirewallsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateFirewallsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateFirewallsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateFirewallsSecurityOption2;
}


export class CreateFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallsRequestBody;

  @Metadata()
  security: CreateFirewallsSecurity;
}


export class CreateFirewallsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewall?: shared.Firewall;

  @Metadata()
  statusCode: number;

  @Metadata()
  createFirewallsDefaultApplicationJsonObject?: CreateFirewallsDefaultApplicationJson;
}
