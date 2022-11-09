import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFIREWALLRULES_SERVERS = [
	"https://api.linode.com/v4",
];



export class UpdateFirewallRulesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class UpdateFirewallRulesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateFirewallRulesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateFirewallRulesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateFirewallRulesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateFirewallRulesSecurityOption2;
}


export class UpdateFirewallRulesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFirewallRulesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Rules;

  @Metadata()
  security: UpdateFirewallRulesSecurity;
}


export class UpdateFirewallRulesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateFirewallRulesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rules?: shared.Rules;

  @Metadata()
  updateFirewallRulesDefaultApplicationJsonObject?: UpdateFirewallRulesDefaultApplicationJson;
}
