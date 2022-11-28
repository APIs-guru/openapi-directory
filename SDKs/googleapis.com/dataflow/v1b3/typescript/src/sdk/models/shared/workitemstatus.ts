import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CounterUpdate } from "./counterupdate";
import { DynamicSourceSplit } from "./dynamicsourcesplit";
import { Status } from "./status";
import { MetricUpdate } from "./metricupdate";
import { ApproximateProgress } from "./approximateprogress";
import { ApproximateReportedProgress } from "./approximatereportedprogress";
import { SourceFork } from "./sourcefork";
import { SourceOperationResponse } from "./sourceoperationresponse";
import { Position } from "./position";



// WorkItemStatus
/** 
 * Conveys a worker's progress through the work described by a WorkItem.
**/
export class WorkItemStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completed" })
  completed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=counterUpdates", elemType: CounterUpdate })
  counterUpdates?: CounterUpdate[];

  @SpeakeasyMetadata({ data: "json, name=dynamicSourceSplit" })
  dynamicSourceSplit?: DynamicSourceSplit;

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Status })
  errors?: Status[];

  @SpeakeasyMetadata({ data: "json, name=metricUpdates", elemType: MetricUpdate })
  metricUpdates?: MetricUpdate[];

  @SpeakeasyMetadata({ data: "json, name=progress" })
  progress?: ApproximateProgress;

  @SpeakeasyMetadata({ data: "json, name=reportIndex" })
  reportIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=reportedProgress" })
  reportedProgress?: ApproximateReportedProgress;

  @SpeakeasyMetadata({ data: "json, name=requestedLeaseDuration" })
  requestedLeaseDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceFork" })
  sourceFork?: SourceFork;

  @SpeakeasyMetadata({ data: "json, name=sourceOperationResponse" })
  sourceOperationResponse?: SourceOperationResponse;

  @SpeakeasyMetadata({ data: "json, name=stopPosition" })
  stopPosition?: Position;

  @SpeakeasyMetadata({ data: "json, name=totalThrottlerWaitTimeSeconds" })
  totalThrottlerWaitTimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=workItemId" })
  workItemId?: string;
}
