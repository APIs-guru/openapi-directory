import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEFIREWALLDEVICE_SERVERS = [
	"https://api.linode.com/v4",
];



export class CreateFirewallDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}

export enum CreateFirewallDeviceRequestBodyTypeEnum {
    Linode = "linode"
}


export class CreateFirewallDeviceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type: CreateFirewallDeviceRequestBodyTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class CreateFirewallDeviceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateFirewallDeviceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateFirewallDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateFirewallDeviceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateFirewallDeviceSecurityOption2;
}


export class CreateFirewallDeviceRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateFirewallDevicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateFirewallDeviceRequestBody;

  @Metadata()
  security: CreateFirewallDeviceSecurity;
}


export class CreateFirewallDeviceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateFirewallDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firewallDevices?: shared.FirewallDevices;

  @Metadata()
  statusCode: number;

  @Metadata()
  createFirewallDeviceDefaultApplicationJsonObject?: CreateFirewallDeviceDefaultApplicationJson;
}
