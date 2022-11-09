import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueueStats
/** 
 * Statistics for a queue.
**/
export class QueueStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=concurrentDispatchesCount" })
  concurrentDispatchesCount?: string;

  @Metadata({ data: "json, name=effectiveExecutionRate" })
  effectiveExecutionRate?: number;

  @Metadata({ data: "json, name=executedLastMinuteCount" })
  executedLastMinuteCount?: string;

  @Metadata({ data: "json, name=oldestEstimatedArrivalTime" })
  oldestEstimatedArrivalTime?: string;

  @Metadata({ data: "json, name=tasksCount" })
  tasksCount?: string;
}
