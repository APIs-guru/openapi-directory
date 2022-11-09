import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTicketsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTicketsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTicketsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTicketsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTicketsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTicketsSecurityOption2;
}


export class GetTicketsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTicketsQueryParams;

  @Metadata()
  security: GetTicketsSecurity;
}


export class GetTickets200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SupportTicket })
  data?: shared.SupportTicket[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetTicketsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTicketsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTickets200ApplicationJsonObject?: GetTickets200ApplicationJson;

  @Metadata()
  getTicketsDefaultApplicationJsonObject?: GetTicketsDefaultApplicationJson;
}
