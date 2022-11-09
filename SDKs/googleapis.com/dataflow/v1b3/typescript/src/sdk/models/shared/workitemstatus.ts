import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=completed" })
  completed?: boolean;

  @Metadata({ data: "json, name=counterUpdates", elemType: shared.CounterUpdate })
  counterUpdates?: CounterUpdate[];

  @Metadata({ data: "json, name=dynamicSourceSplit" })
  dynamicSourceSplit?: DynamicSourceSplit;

  @Metadata({ data: "json, name=errors", elemType: shared.Status })
  errors?: Status[];

  @Metadata({ data: "json, name=metricUpdates", elemType: shared.MetricUpdate })
  metricUpdates?: MetricUpdate[];

  @Metadata({ data: "json, name=progress" })
  progress?: ApproximateProgress;

  @Metadata({ data: "json, name=reportIndex" })
  reportIndex?: string;

  @Metadata({ data: "json, name=reportedProgress" })
  reportedProgress?: ApproximateReportedProgress;

  @Metadata({ data: "json, name=requestedLeaseDuration" })
  requestedLeaseDuration?: string;

  @Metadata({ data: "json, name=sourceFork" })
  sourceFork?: SourceFork;

  @Metadata({ data: "json, name=sourceOperationResponse" })
  sourceOperationResponse?: SourceOperationResponse;

  @Metadata({ data: "json, name=stopPosition" })
  stopPosition?: Position;

  @Metadata({ data: "json, name=totalThrottlerWaitTimeSeconds" })
  totalThrottlerWaitTimeSeconds?: number;

  @Metadata({ data: "json, name=workItemId" })
  workItemId?: string;
}
