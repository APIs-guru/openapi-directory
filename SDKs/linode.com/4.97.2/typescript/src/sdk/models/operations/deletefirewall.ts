import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEFIREWALL_SERVERS = [
	"https://api.linode.com/v4",
];



export class DeleteFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class DeleteFirewallSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteFirewallSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFirewallSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFirewallSecurityOption2;
}


export class DeleteFirewallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteFirewallPathParams;

  @Metadata()
  security: DeleteFirewallSecurity;
}


export class DeleteFirewallDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteFirewall200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteFirewallDefaultApplicationJsonObject?: DeleteFirewallDefaultApplicationJson;
}
