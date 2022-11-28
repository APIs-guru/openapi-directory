import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAttemptResult } from "./instanceattemptresult";
/**
 * Instance represents the status of an instance of a Job.
**/
export declare class InstanceStatus extends SpeakeasyBase {
    completionTime?: string;
    failed?: number;
    index?: number;
    lastAttemptResult?: InstanceAttemptResult;
    lastExitCode?: number;
    restarted?: number;
    startTime?: string;
    succeeded?: number;
}
