import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetFirewallDeviceServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetFirewallDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetFirewallDevicePathParams;

  @SpeakeasyMetadata()
  security: GetFirewallDeviceSecurity;
}


export class GetFirewallDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewallDevices?: shared.FirewallDevices;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFirewallDeviceDefaultApplicationJsonObject?: GetFirewallDeviceDefaultApplicationJson;
}
