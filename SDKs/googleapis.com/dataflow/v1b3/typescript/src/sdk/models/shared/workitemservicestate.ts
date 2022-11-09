import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";
import { HotKeyDetection } from "./hotkeydetection";
import { MetricShortId } from "./metricshortid";
import { ApproximateSplitRequest } from "./approximatesplitrequest";
import { ApproximateProgress } from "./approximateprogress";
import { Position } from "./position";


// WorkItemServiceState
/** 
 * The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
**/
export class WorkItemServiceState extends SpeakeasyBase {
  @Metadata({ data: "json, name=completeWorkStatus" })
  completeWorkStatus?: Status;

  @Metadata({ data: "json, name=harnessData" })
  harnessData?: Map<string, any>;

  @Metadata({ data: "json, name=hotKeyDetection" })
  hotKeyDetection?: HotKeyDetection;

  @Metadata({ data: "json, name=leaseExpireTime" })
  leaseExpireTime?: string;

  @Metadata({ data: "json, name=metricShortId", elemType: shared.MetricShortId })
  metricShortId?: MetricShortId[];

  @Metadata({ data: "json, name=nextReportIndex" })
  nextReportIndex?: string;

  @Metadata({ data: "json, name=reportStatusInterval" })
  reportStatusInterval?: string;

  @Metadata({ data: "json, name=splitRequest" })
  splitRequest?: ApproximateSplitRequest;

  @Metadata({ data: "json, name=suggestedStopPoint" })
  suggestedStopPoint?: ApproximateProgress;

  @Metadata({ data: "json, name=suggestedStopPosition" })
  suggestedStopPosition?: Position;
}
