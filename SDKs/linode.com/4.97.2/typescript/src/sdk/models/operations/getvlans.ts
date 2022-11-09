import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETVLANS_SERVERS = [
	"https://api.linode.com/v4",
	"https://api.linode.com/v4beta",
];



export class GetVlaNsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetVlaNsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetVlaNsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetVlaNsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetVlaNsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetVlaNsSecurityOption2;
}


export class GetVlaNsRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: GetVlaNsQueryParams;

  @Metadata()
  security: GetVlaNsSecurity;
}


export class GetVlaNs200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Vlans })
  data?: shared.Vlans[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetVlaNsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetVlaNsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getVlaNs200ApplicationJsonObject?: GetVlaNs200ApplicationJson;

  @Metadata()
  getVlaNsDefaultApplicationJsonObject?: GetVlaNsDefaultApplicationJson;
}
