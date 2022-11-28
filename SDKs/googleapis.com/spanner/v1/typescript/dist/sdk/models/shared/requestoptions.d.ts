import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RequestOptionsPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    PriorityLow = "PRIORITY_LOW",
    PriorityMedium = "PRIORITY_MEDIUM",
    PriorityHigh = "PRIORITY_HIGH"
}
/**
 * Common request options for various APIs.
**/
export declare class RequestOptions extends SpeakeasyBase {
    priority?: RequestOptionsPriorityEnum;
    requestTag?: string;
    transactionTag?: string;
}
