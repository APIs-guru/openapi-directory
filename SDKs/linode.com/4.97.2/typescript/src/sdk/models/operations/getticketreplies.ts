import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTicketRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class GetTicketRepliesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTicketRepliesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetTicketReplies200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SupportTicketReply })
  data?: shared.SupportTicketReply[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: number;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: number;
}


export class GetTicketRepliesDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTicketRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTicketRepliesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTicketRepliesQueryParams;

  @SpeakeasyMetadata()
  security: GetTicketRepliesSecurity;
}


export class GetTicketRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTicketReplies200ApplicationJsonObject?: GetTicketReplies200ApplicationJson;

  @SpeakeasyMetadata()
  getTicketRepliesDefaultApplicationJsonObject?: GetTicketRepliesDefaultApplicationJson;
}
