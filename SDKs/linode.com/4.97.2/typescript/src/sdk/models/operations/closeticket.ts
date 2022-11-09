import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloseTicketPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class CloseTicketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CloseTicketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CloseTicketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloseTicketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloseTicketSecurityOption2;
}


export class CloseTicketRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloseTicketPathParams;

  @Metadata()
  security: CloseTicketSecurity;
}


export class CloseTicketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloseTicketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  closeTicket200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  closeTicketDefaultApplicationJsonObject?: CloseTicketDefaultApplicationJson;
}
