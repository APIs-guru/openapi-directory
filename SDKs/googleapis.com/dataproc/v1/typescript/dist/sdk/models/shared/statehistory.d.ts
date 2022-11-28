import { SpeakeasyBase } from "../../../internal/utils";
export declare enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Cancelling = "CANCELLING",
    Cancelled = "CANCELLED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * Historical state information.
**/
export declare class StateHistory extends SpeakeasyBase {
    state?: StateHistoryStateEnum;
    stateMessage?: string;
    stateStartTime?: string;
}
