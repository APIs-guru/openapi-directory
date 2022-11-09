import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEFIREWALLDEVICE_SERVERS = [
	"https://api.linode.com/v4",
];



export class DeleteFirewallDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class DeleteFirewallDeviceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteFirewallDeviceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteFirewallDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFirewallDeviceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFirewallDeviceSecurityOption2;
}


export class DeleteFirewallDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteFirewallDevicePathParams;

  @Metadata()
  security: DeleteFirewallDeviceSecurity;
}


export class DeleteFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteFirewallDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteFirewallDevice200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteFirewallDeviceDefaultApplicationJsonObject?: DeleteFirewallDeviceDefaultApplicationJson;
}
