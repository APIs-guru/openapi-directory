import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCallsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare enum GetCallsStatusEnum {
    Started = "started",
    Ringing = "ringing",
    Answered = "answered",
    Machine = "machine",
    Completed = "completed",
    Busy = "busy",
    Cancelled = "cancelled",
    Failed = "failed",
    Rejected = "rejected",
    Timeout = "timeout",
    Unanswered = "unanswered"
}
export declare class GetCallsQueryParams extends SpeakeasyBase {
    conversationUuid?: string;
    dateEnd?: Date;
    dateStart?: Date;
    order?: GetCallsOrderEnum;
    pageSize?: number;
    recordIndex?: number;
    status?: GetCallsStatusEnum;
}
export declare class GetCallsSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetCallsRequest extends SpeakeasyBase {
    queryParams: GetCallsQueryParams;
    security: GetCallsSecurity;
}
export declare class GetCallsResponse extends SpeakeasyBase {
    contentType: string;
    getCallsResponse?: shared.GetCallsResponse;
    statusCode: number;
}
