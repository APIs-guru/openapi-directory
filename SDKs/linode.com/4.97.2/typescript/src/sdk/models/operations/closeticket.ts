import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloseTicketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class CloseTicketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CloseTicketDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloseTicketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloseTicketPathParams;

  @SpeakeasyMetadata()
  security: CloseTicketSecurity;
}


export class CloseTicketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  closeTicket200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  closeTicketDefaultApplicationJsonObject?: CloseTicketDefaultApplicationJson;
}
