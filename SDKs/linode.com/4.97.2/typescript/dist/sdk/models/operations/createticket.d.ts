import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTicketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateTicketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateTicketRequest extends SpeakeasyBase {
    request?: shared.SupportTicketRequest;
    security: CreateTicketSecurity;
}
export declare class CreateTicketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supportTicket?: shared.SupportTicket;
    createTicketDefaultApplicationJsonObject?: CreateTicketDefaultApplicationJson;
}
