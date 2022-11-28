import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.
**/
export declare class PullMessage extends SpeakeasyBase {
    payload?: string;
    tag?: string;
}
