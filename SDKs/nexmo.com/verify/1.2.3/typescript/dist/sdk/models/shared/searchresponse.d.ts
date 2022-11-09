import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum SearchResponseChecksStatusEnum {
    Valid = "VALID",
    Invalid = "INVALID"
}
export declare class SearchResponseChecks extends SpeakeasyBase {
    code?: string;
    dateReceived?: string;
    ipAddress?: string;
    status?: SearchResponseChecksStatusEnum;
}
export declare enum SearchResponseEventsTypeEnum {
    Tts = "tts",
    Sms = "sms"
}
export declare class SearchResponseEvents extends SpeakeasyBase {
    id?: string;
    type?: SearchResponseEventsTypeEnum;
}
export declare enum SearchResponseStatusEnum {
    InProgress = "IN PROGRESS",
    Success = "SUCCESS",
    Failed = "FAILED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED"
}
/**
 * Success
**/
export declare class SearchResponse extends SpeakeasyBase {
    accountId?: string;
    checks?: SearchResponseChecks[];
    currency?: string;
    dateFinalized?: string;
    dateSubmitted?: string;
    estimatedPriceMessagesSent?: string;
    events?: SearchResponseEvents[];
    firstEventDate?: string;
    lastEventDate?: string;
    number?: string;
    price?: string;
    requestId?: string;
    senderId?: string;
    status?: SearchResponseStatusEnum;
}
