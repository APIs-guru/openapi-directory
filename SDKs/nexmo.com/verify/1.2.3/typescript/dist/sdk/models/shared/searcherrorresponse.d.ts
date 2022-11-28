import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SearchErrorResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    OneHundredAndOne = "101"
}
/**
 * Error
**/
export declare class SearchErrorResponse extends SpeakeasyBase {
    errorText?: string;
    requestId?: string;
    status?: SearchErrorResponseStatusEnum;
}
