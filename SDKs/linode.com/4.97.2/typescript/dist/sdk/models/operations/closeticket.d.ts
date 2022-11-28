import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloseTicketPathParams extends SpeakeasyBase {
    ticketId: number;
}
export declare class CloseTicketSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CloseTicketDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CloseTicketRequest extends SpeakeasyBase {
    pathParams: CloseTicketPathParams;
    security: CloseTicketSecurity;
}
export declare class CloseTicketResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    closeTicket200ApplicationJsonObject?: Map<string, any>;
    closeTicketDefaultApplicationJsonObject?: CloseTicketDefaultApplicationJson;
}
