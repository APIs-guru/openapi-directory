import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETFIREWALLDEVICE_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetFirewallDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallDeviceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetFirewallDeviceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFirewallDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFirewallDeviceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFirewallDeviceSecurityOption2;
}


export class GetFirewallDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetFirewallDevicePathParams;

  @Metadata()
  security: GetFirewallDeviceSecurity;
}


export class GetFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewallDevices?: shared.FirewallDevices;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFirewallDeviceDefaultApplicationJsonObject?: GetFirewallDeviceDefaultApplicationJson;
}
