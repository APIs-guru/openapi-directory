import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTicketPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class GetTicketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetTicketDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTicketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTicketPathParams;

  @SpeakeasyMetadata()
  security: GetTicketSecurity;
}


export class GetTicketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supportTicket?: shared.SupportTicket;

  @SpeakeasyMetadata()
  getTicketDefaultApplicationJsonObject?: GetTicketDefaultApplicationJson;
}
