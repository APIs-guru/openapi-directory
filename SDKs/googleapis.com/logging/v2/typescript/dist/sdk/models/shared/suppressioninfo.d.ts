import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SuppressionInfoReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    RateLimit = "RATE_LIMIT",
    NotConsumed = "NOT_CONSUMED"
}
/**
 * Information about entries that were omitted from the session.
**/
export declare class SuppressionInfo extends SpeakeasyBase {
    reason?: SuppressionInfoReasonEnum;
    suppressedCount?: number;
}
