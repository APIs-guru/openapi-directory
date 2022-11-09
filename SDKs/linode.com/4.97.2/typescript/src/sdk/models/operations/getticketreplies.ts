import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTicketRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class GetTicketRepliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTicketRepliesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTicketRepliesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTicketRepliesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTicketRepliesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTicketRepliesSecurityOption2;
}


export class GetTicketRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTicketRepliesPathParams;

  @Metadata()
  queryParams: GetTicketRepliesQueryParams;

  @Metadata()
  security: GetTicketRepliesSecurity;
}


export class GetTicketReplies200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.SupportTicketReply })
  data?: shared.SupportTicketReply[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetTicketRepliesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTicketRepliesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTicketReplies200ApplicationJsonObject?: GetTicketReplies200ApplicationJson;

  @Metadata()
  getTicketRepliesDefaultApplicationJsonObject?: GetTicketRepliesDefaultApplicationJson;
}
