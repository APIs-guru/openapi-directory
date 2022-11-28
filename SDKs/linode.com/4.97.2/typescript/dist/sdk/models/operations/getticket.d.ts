import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTicketPathParams extends SpeakeasyBase {
    ticketId: number;
}
export declare class GetTicketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTicketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTicketRequest extends SpeakeasyBase {
    pathParams: GetTicketPathParams;
    security: GetTicketSecurity;
}
export declare class GetTicketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    supportTicket?: shared.SupportTicket;
    getTicketDefaultApplicationJsonObject?: GetTicketDefaultApplicationJson;
}
