import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetEventsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetEventsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetEventsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetEventsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetEventsSecurityOption2;
}


export class GetEventsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetEventsQueryParams;

  @Metadata()
  security: GetEventsSecurity;
}


export class GetEvents200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.Event })
  data?: shared.Event[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetEventsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getEvents200ApplicationJsonObject?: GetEvents200ApplicationJson;

  @Metadata()
  getEventsDefaultApplicationJsonObject?: GetEventsDefaultApplicationJson;
}
