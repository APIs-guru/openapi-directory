import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT",
    StudentEditedAfterTurnIn = "STUDENT_EDITED_AFTER_TURN_IN"
}


// StateHistory
/** 
 * The history of each state this submission has been in.
**/
export class StateHistory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actorUserId" })
  actorUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: StateHistoryStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateTimestamp" })
  stateTimestamp?: string;
}
