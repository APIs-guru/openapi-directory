import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFirewallRulesServerList = [
	"https://api.linode.com/v4",
] as const;


export class UpdateFirewallRulesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class UpdateFirewallRulesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateFirewallRulesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateFirewallRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateFirewallRulesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Rules;

  @SpeakeasyMetadata()
  security: UpdateFirewallRulesSecurity;
}


export class UpdateFirewallRulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rules?: shared.Rules;

  @SpeakeasyMetadata()
  updateFirewallRulesDefaultApplicationJsonObject?: UpdateFirewallRulesDefaultApplicationJson;
}
