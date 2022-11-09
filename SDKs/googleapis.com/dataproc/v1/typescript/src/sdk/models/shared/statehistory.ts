import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Cancelling = "CANCELLING"
,    Cancelled = "CANCELLED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
}


// StateHistory
/** 
 * Historical state information.
**/
export class StateHistory extends SpeakeasyBase {
  @Metadata({ data: "json, name=state" })
  state?: StateHistoryStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=stateStartTime" })
  stateStartTime?: string;
}
