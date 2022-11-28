import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTicketsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetTicketsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetTickets200ApplicationJson extends SpeakeasyBase {
    data?: shared.SupportTicket[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetTicketsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetTicketsRequest extends SpeakeasyBase {
    queryParams: GetTicketsQueryParams;
    security: GetTicketsSecurity;
}
export declare class GetTicketsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTickets200ApplicationJsonObject?: GetTickets200ApplicationJson;
    getTicketsDefaultApplicationJsonObject?: GetTicketsDefaultApplicationJson;
}
