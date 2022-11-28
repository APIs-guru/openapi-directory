import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EventRecordFailureFailureCauseEnum {
    EventUpdateFailureCauseUnspecified = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    InvalidUpdateValue = "INVALID_UPDATE_VALUE"
}


// EventRecordFailure
/** 
 * An event update failure resource.
**/
export class EventRecordFailure extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=failureCause" })
  failureCause?: EventRecordFailureFailureCauseEnum;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
