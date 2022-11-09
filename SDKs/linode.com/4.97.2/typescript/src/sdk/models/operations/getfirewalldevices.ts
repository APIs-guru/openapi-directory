import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETFIREWALLDEVICES_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetFirewallDevicesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallDevicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetFirewallDevicesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetFirewallDevicesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFirewallDevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFirewallDevicesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFirewallDevicesSecurityOption2;
}


export class GetFirewallDevicesRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetFirewallDevicesPathParams;

  @Metadata()
  queryParams: GetFirewallDevicesQueryParams;

  @Metadata()
  security: GetFirewallDevicesSecurity;
}


export class GetFirewallDevices200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.FirewallDevices })
  data?: shared.FirewallDevices[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetFirewallDevicesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFirewallDevices200ApplicationJsonObject?: GetFirewallDevices200ApplicationJson;

  @Metadata()
  getFirewallDevicesDefaultApplicationJsonObject?: GetFirewallDevicesDefaultApplicationJson;
}
