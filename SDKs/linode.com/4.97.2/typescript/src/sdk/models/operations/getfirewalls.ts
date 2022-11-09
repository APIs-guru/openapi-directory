import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETFIREWALLS_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetFirewallsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetFirewallsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetFirewallsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetFirewallsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFirewallsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFirewallsSecurityOption2;
}


export class GetFirewallsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetFirewallsQueryParams;

  @Metadata()
  security: GetFirewallsSecurity;
}


export class GetFirewalls200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Firewall })
  data?: shared.Firewall[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetFirewallsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetFirewallsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getFirewalls200ApplicationJsonObject?: GetFirewalls200ApplicationJson;

  @Metadata()
  getFirewallsDefaultApplicationJsonObject?: GetFirewallsDefaultApplicationJson;
}
