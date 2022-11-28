import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
**/
export declare class RateLimits extends SpeakeasyBase {
    maxBurstSize?: number;
    maxConcurrentTasks?: number;
    maxTasksDispatchedPerSecond?: number;
}
