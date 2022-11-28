import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EventRecordFailureFailureCauseEnum {
    EventUpdateFailureCauseUnspecified = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    InvalidUpdateValue = "INVALID_UPDATE_VALUE"
}
/**
 * An event update failure resource.
**/
export declare class EventRecordFailure extends SpeakeasyBase {
    eventId?: string;
    failureCause?: EventRecordFailureFailureCauseEnum;
    kind?: string;
}
