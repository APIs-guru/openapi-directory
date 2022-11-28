import { SpeakeasyBase } from "../../../internal/utils";
import { EventPeriodRange } from "./eventperiodrange";
export declare enum EventBatchRecordFailureFailureCauseEnum {
    EventFailureCauseUnspecified = "EVENT_FAILURE_CAUSE_UNSPECIFIED",
    TooLarge = "TOO_LARGE",
    TimePeriodExpired = "TIME_PERIOD_EXPIRED",
    TimePeriodShort = "TIME_PERIOD_SHORT",
    TimePeriodLong = "TIME_PERIOD_LONG",
    AlreadyUpdated = "ALREADY_UPDATED",
    RecordRateHigh = "RECORD_RATE_HIGH"
}
/**
 * A batch update failure resource.
**/
export declare class EventBatchRecordFailure extends SpeakeasyBase {
    failureCause?: EventBatchRecordFailureFailureCauseEnum;
    kind?: string;
    range?: EventPeriodRange;
}
