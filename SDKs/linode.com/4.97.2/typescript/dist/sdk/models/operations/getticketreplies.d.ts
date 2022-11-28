import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTicketRepliesPathParams extends SpeakeasyBase {
    ticketId: number;
}
export declare class GetTicketRepliesQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTicketRepliesSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTicketReplies200ApplicationJson extends SpeakeasyBase {
    data?: shared.SupportTicketReply[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetTicketRepliesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTicketRepliesRequest extends SpeakeasyBase {
    pathParams: GetTicketRepliesPathParams;
    queryParams: GetTicketRepliesQueryParams;
    security: GetTicketRepliesSecurity;
}
export declare class GetTicketRepliesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTicketReplies200ApplicationJsonObject?: GetTicketReplies200ApplicationJson;
    getTicketRepliesDefaultApplicationJsonObject?: GetTicketRepliesDefaultApplicationJson;
}
