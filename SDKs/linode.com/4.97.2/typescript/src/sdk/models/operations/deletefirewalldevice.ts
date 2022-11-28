import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteFirewallDeviceServerList = [
	"https://api.linode.com/v4",
] as const;


export class DeleteFirewallDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class DeleteFirewallDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteFirewallDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteFirewallDevicePathParams;

  @SpeakeasyMetadata()
  security: DeleteFirewallDeviceSecurity;
}


export class DeleteFirewallDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteFirewallDevice200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteFirewallDeviceDefaultApplicationJsonObject?: DeleteFirewallDeviceDefaultApplicationJson;
}
