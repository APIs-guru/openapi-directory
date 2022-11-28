import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=completeWorkStatus" })
  completeWorkStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=harnessData" })
  harnessData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=hotKeyDetection" })
  hotKeyDetection?: HotKeyDetection;

  @SpeakeasyMetadata({ data: "json, name=leaseExpireTime" })
  leaseExpireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=metricShortId", elemType: MetricShortId })
  metricShortId?: MetricShortId[];

  @SpeakeasyMetadata({ data: "json, name=nextReportIndex" })
  nextReportIndex?: string;

  @SpeakeasyMetadata({ data: "json, name=reportStatusInterval" })
  reportStatusInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=splitRequest" })
  splitRequest?: ApproximateSplitRequest;

  @SpeakeasyMetadata({ data: "json, name=suggestedStopPoint" })
  suggestedStopPoint?: ApproximateProgress;

  @SpeakeasyMetadata({ data: "json, name=suggestedStopPosition" })
  suggestedStopPosition?: Position;
}
