import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueueStats
/** 
 * Statistics for a queue.
**/
export class QueueStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=concurrentDispatchesCount" })
  concurrentDispatchesCount?: string;

  @SpeakeasyMetadata({ data: "json, name=effectiveExecutionRate" })
  effectiveExecutionRate?: number;

  @SpeakeasyMetadata({ data: "json, name=executedLastMinuteCount" })
  executedLastMinuteCount?: string;

  @SpeakeasyMetadata({ data: "json, name=oldestEstimatedArrivalTime" })
  oldestEstimatedArrivalTime?: string;

  @SpeakeasyMetadata({ data: "json, name=tasksCount" })
  tasksCount?: string;
}
