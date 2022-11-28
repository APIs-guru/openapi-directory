import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTicketAttachmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class CreateTicketAttachmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateTicketAttachmentDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTicketAttachmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateTicketAttachmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: any;

  @SpeakeasyMetadata()
  security: CreateTicketAttachmentSecurity;
}


export class CreateTicketAttachmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createTicketAttachment200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  createTicketAttachmentDefaultApplicationJsonObject?: CreateTicketAttachmentDefaultApplicationJson;
}
