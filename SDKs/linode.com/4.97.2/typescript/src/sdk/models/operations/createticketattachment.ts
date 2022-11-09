import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateTicketAttachmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ticketId" })
  ticketId: number;
}


export class CreateTicketAttachmentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateTicketAttachmentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateTicketAttachmentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateTicketAttachmentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateTicketAttachmentSecurityOption2;
}


export class CreateTicketAttachmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateTicketAttachmentPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: any;

  @Metadata()
  security: CreateTicketAttachmentSecurity;
}


export class CreateTicketAttachmentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateTicketAttachmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createTicketAttachment200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  createTicketAttachmentDefaultApplicationJsonObject?: CreateTicketAttachmentDefaultApplicationJson;
}
