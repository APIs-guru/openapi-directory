import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEFIREWALL_SERVERS = [
	"https://api.linode.com/v4",
];



export class UpdateFirewallPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class UpdateFirewallRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=status" })
  status?: shared.StatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateFirewallSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateFirewallSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateFirewallSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateFirewallSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateFirewallSecurityOption2;
}


export class UpdateFirewallRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateFirewallPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateFirewallRequestBody;

  @Metadata()
  security: UpdateFirewallSecurity;
}


export class UpdateFirewallDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateFirewallResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewall?: shared.Firewall;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateFirewallDefaultApplicationJsonObject?: UpdateFirewallDefaultApplicationJson;
}
