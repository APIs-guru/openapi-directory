import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFirewallsServerList = [
	"https://api.linode.com/v4",
] as const;


// CreateFirewallsRequestBodyDevices
/** 
 * Devices to create for this Firewall.
 * When a Device is created, the Firewall is assigned to its associated service.
 * Currently, Devices can only be created for Linode instances.
 * 
**/
export class CreateFirewallsRequestBodyDevices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=linodes" })
  linodes?: number[];
}

export enum CreateFirewallsRequestBodyRulesInboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}

export enum CreateFirewallsRequestBodyRulesOutboundPolicyEnum {
    Accept = "ACCEPT",
    Drop = "DROP"
}


// CreateFirewallsRequestBodyRules
/** 
 * The inbound and outbound access rules to apply to the Firewall.
 * 
 * A Firewall may have up to 25 rules across its inbound and outbound rulesets.
 * 
**/
export class CreateFirewallsRequestBodyRules extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inbound", elemType: shared.FirewallRuleConfig })
  inbound?: shared.FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=inbound_policy" })
  inboundPolicy?: CreateFirewallsRequestBodyRulesInboundPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=outbound", elemType: shared.FirewallRuleConfig })
  outbound?: shared.FirewallRuleConfig[];

  @SpeakeasyMetadata({ data: "json, name=outbound_policy" })
  outboundPolicy?: CreateFirewallsRequestBodyRulesOutboundPolicyEnum;
}


export class CreateFirewallsRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=devices" })
  devices?: CreateFirewallsRequestBodyDevices;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=rules" })
  rules: CreateFirewallsRequestBodyRules;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateFirewallsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateFirewallsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateFirewallsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallsRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateFirewallsSecurity;
}


export class CreateFirewallsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewall?: shared.Firewall;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFirewallsDefaultApplicationJsonObject?: CreateFirewallsDefaultApplicationJson;
}
