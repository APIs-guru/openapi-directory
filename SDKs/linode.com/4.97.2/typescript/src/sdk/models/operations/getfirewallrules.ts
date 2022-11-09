import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETFIREWALLRULES_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallRulesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetFirewallRulesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFirewallRulesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFirewallRulesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFirewallRulesSecurityOption2;
}


export class GetFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetFirewallRulesPathParams;

  @Metadata()
  security: GetFirewallRulesSecurity;
}


export class GetFirewallRulesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFirewallRulesDefaultApplicationJsonObject?: GetFirewallRulesDefaultApplicationJson;

  @Metadata()
  rules?: shared.Rules;
}
