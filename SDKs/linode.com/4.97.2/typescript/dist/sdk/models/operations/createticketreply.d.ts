import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTicketReplyPathParams extends SpeakeasyBase {
    ticketId: number;
}
export declare class CreateTicketReplySecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateTicketReplyDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateTicketReplyRequest extends SpeakeasyBase {
    pathParams: CreateTicketReplyPathParams;
    request: any;
    security: CreateTicketReplySecurity;
}
export declare class CreateTicketReplyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supportTicketReply?: shared.SupportTicketReply;
    createTicketReplyDefaultApplicationJsonObject?: CreateTicketReplyDefaultApplicationJson;
}
