import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateFirewallServerList = [
	"https://api.linode.com/v4",
] as const;


export class UpdateFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class UpdateFirewallRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateFirewallDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateFirewallPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateFirewallRequestBodyInput;

  @SpeakeasyMetadata()
  security: UpdateFirewallSecurity;
}


export class UpdateFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewall?: shared.Firewall;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateFirewallDefaultApplicationJsonObject?: UpdateFirewallDefaultApplicationJson;
}
