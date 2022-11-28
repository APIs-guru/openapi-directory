import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistics for a queue.
**/
export declare class QueueStats extends SpeakeasyBase {
    concurrentDispatchesCount?: string;
    effectiveExecutionRate?: number;
    executedLastMinuteCount?: string;
    oldestEstimatedArrivalTime?: string;
    tasksCount?: string;
}
