import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT",
    StudentEditedAfterTurnIn = "STUDENT_EDITED_AFTER_TURN_IN"
}
/**
 * The history of each state this submission has been in.
**/
export declare class StateHistory extends SpeakeasyBase {
    actorUserId?: string;
    state?: StateHistoryStateEnum;
    stateTimestamp?: string;
}
