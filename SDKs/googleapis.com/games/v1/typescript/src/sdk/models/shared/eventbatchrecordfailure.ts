import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EventPeriodRange } from "./eventperiodrange";

export enum EventBatchRecordFailureFailureCauseEnum {
    EventFailureCauseUnspecified = "EVENT_FAILURE_CAUSE_UNSPECIFIED"
,    TooLarge = "TOO_LARGE"
,    TimePeriodExpired = "TIME_PERIOD_EXPIRED"
,    TimePeriodShort = "TIME_PERIOD_SHORT"
,    TimePeriodLong = "TIME_PERIOD_LONG"
,    AlreadyUpdated = "ALREADY_UPDATED"
,    RecordRateHigh = "RECORD_RATE_HIGH"
}


// EventBatchRecordFailure
/** 
 * A batch update failure resource.
**/
export class EventBatchRecordFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=failureCause" })
  failureCause?: EventBatchRecordFailureFailureCauseEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=range" })
  range?: EventPeriodRange;
}
