import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}


// StateHistory
/** 
 * Historical state information.
**/
export class StateHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StateHistoryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=stateStartTime" })
  stateStartTime?: string;
}
