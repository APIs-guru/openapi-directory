import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateFirewallDeviceServerList = [
	"https://api.linode.com/v4",
] as const;


export class CreateFirewallDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}

export enum CreateFirewallDeviceRequestBodyTypeEnum {
    Linode = "linode"
}


export class CreateFirewallDeviceRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateFirewallDeviceRequestBodyTypeEnum;
}


export class CreateFirewallDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateFirewallDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateFirewallDevicePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallDeviceRequestBodyInput;

  @SpeakeasyMetadata()
  security: CreateFirewallDeviceSecurity;
}


export class CreateFirewallDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firewallDevices?: shared.FirewallDevices;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createFirewallDeviceDefaultApplicationJsonObject?: CreateFirewallDeviceDefaultApplicationJson;
}
