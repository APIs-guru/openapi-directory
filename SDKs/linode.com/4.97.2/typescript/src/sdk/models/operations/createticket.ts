import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTicketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateTicketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateTicketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateTicketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateTicketSecurityOption2;
}


export class CreateTicketRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SupportTicketRequest;

  @Metadata()
  security: CreateTicketSecurity;
}


export class CreateTicketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTicketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supportTicket?: shared.SupportTicket;

  @Metadata()
  createTicketDefaultApplicationJsonObject?: CreateTicketDefaultApplicationJson;
}
