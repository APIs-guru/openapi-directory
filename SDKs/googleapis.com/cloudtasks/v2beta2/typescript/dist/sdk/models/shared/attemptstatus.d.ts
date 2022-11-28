import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * The status of a task attempt.
**/
export declare class AttemptStatus extends SpeakeasyBase {
    dispatchTime?: string;
    responseStatus?: Status;
    responseTime?: string;
    scheduleTime?: string;
}
