import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetFirewallServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetFirewallDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetFirewallPathParams;

  @SpeakeasyMetadata()
  security: GetFirewallSecurity;
}


export class GetFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewall?: shared.Firewall;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFirewallDefaultApplicationJsonObject?: GetFirewallDefaultApplicationJson;
}
