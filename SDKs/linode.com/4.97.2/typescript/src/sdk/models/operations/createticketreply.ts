import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTicketReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class CreateTicketReplySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateTicketReplySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateTicketReplySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateTicketReplySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateTicketReplySecurityOption2;
}


export class CreateTicketReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTicketReplyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: CreateTicketReplySecurity;
}


export class CreateTicketReplyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTicketReplyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supportTicketReply?: shared.SupportTicketReply;

  @Metadata()
  createTicketReplyDefaultApplicationJsonObject?: CreateTicketReplyDefaultApplicationJson;
}
