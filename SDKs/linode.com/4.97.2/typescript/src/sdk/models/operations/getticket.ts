import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTicketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class GetTicketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTicketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTicketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTicketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTicketSecurityOption2;
}


export class GetTicketRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTicketPathParams;

  @Metadata()
  security: GetTicketSecurity;
}


export class GetTicketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTicketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supportTicket?: shared.SupportTicket;

  @Metadata()
  getTicketDefaultApplicationJsonObject?: GetTicketDefaultApplicationJson;
}
