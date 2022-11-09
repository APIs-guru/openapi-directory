import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EventRecordFailureFailureCauseEnum {
    EventUpdateFailureCauseUnspecified = "EVENT_UPDATE_FAILURE_CAUSE_UNSPECIFIED"
,    NotFound = "NOT_FOUND"
,    InvalidUpdateValue = "INVALID_UPDATE_VALUE"
}


// EventRecordFailure
/** 
 * An event update failure resource.
**/
export class EventRecordFailure extends SpeakeasyBase {
  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=failureCause" })
  failureCause?: EventRecordFailureFailureCauseEnum;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
