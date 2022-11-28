import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTicketAttachmentPathParams extends SpeakeasyBase {
    ticketId: number;
}
export declare class CreateTicketAttachmentSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateTicketAttachmentDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateTicketAttachmentRequest extends SpeakeasyBase {
    pathParams: CreateTicketAttachmentPathParams;
    request: any;
    security: CreateTicketAttachmentSecurity;
}
export declare class CreateTicketAttachmentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createTicketAttachment200ApplicationJsonObject?: Map<string, any>;
    createTicketAttachmentDefaultApplicationJsonObject?: CreateTicketAttachmentDefaultApplicationJson;
}
