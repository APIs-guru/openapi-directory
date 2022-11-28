import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetFirewallDevicesServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetFirewallDevicesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firewallId" })
  firewallId: number;
}


export class GetFirewallDevicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetFirewallDevicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetFirewallDevices200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.FirewallDevices })
  data?: shared.FirewallDevices[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetFirewallDevicesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallDevicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetFirewallDevicesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFirewallDevicesQueryParams;

  @SpeakeasyMetadata()
  security: GetFirewallDevicesSecurity;
}


export class GetFirewallDevicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getFirewallDevices200ApplicationJsonObject?: GetFirewallDevices200ApplicationJson;

  @SpeakeasyMetadata()
  getFirewallDevicesDefaultApplicationJsonObject?: GetFirewallDevicesDefaultApplicationJson;
}
