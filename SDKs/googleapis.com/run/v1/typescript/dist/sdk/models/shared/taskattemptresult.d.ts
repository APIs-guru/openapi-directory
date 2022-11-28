import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleRpcStatus } from "./googlerpcstatus";
/**
 * Result of a task attempt.
**/
export declare class TaskAttemptResult extends SpeakeasyBase {
    exitCode?: number;
    status?: GoogleRpcStatus;
}
