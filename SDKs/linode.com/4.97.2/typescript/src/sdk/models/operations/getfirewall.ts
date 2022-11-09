import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETFIREWALL_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetFirewallSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFirewallSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFirewallSecurityOption2;
}


export class GetFirewallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetFirewallPathParams;

  @Metadata()
  security: GetFirewallSecurity;
}


export class GetFirewallDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewall?: shared.Firewall;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFirewallDefaultApplicationJsonObject?: GetFirewallDefaultApplicationJson;
}
