import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetClientsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetClientsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetClientsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetClientsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetClientsSecurityOption2;
}


export class GetClientsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetClientsQueryParams;

  @Metadata()
  security: GetClientsSecurity;
}


export class GetClients200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.OAuthClient })
  data?: shared.OAuthClient[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetClientsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getClients200ApplicationJsonObject?: GetClients200ApplicationJson;

  @Metadata()
  getClientsDefaultApplicationJsonObject?: GetClientsDefaultApplicationJson;
}
