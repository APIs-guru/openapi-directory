import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLongviewClientsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetLongviewClientsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLongviewClientsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLongviewClientsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLongviewClientsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLongviewClientsSecurityOption2;
}


export class GetLongviewClientsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLongviewClientsQueryParams;

  @Metadata()
  security: GetLongviewClientsSecurity;
}


export class GetLongviewClients200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.LongviewClient })
  data?: shared.LongviewClient[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetLongviewClientsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewClientsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLongviewClients200ApplicationJsonObject?: GetLongviewClients200ApplicationJson;

  @Metadata()
  getLongviewClientsDefaultApplicationJsonObject?: GetLongviewClientsDefaultApplicationJson;
}
