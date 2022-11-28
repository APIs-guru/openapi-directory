import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
import { HotKeyDetection } from "./hotkeydetection";
import { MetricShortId } from "./metricshortid";
import { ApproximateSplitRequest } from "./approximatesplitrequest";
import { ApproximateProgress } from "./approximateprogress";
import { Position } from "./position";
/**
 * The Dataflow service's idea of the current state of a WorkItem being processed by a worker.
**/
export declare class WorkItemServiceState extends SpeakeasyBase {
    completeWorkStatus?: Status;
    harnessData?: Map<string, any>;
    hotKeyDetection?: HotKeyDetection;
    leaseExpireTime?: string;
    metricShortId?: MetricShortId[];
    nextReportIndex?: string;
    reportStatusInterval?: string;
    splitRequest?: ApproximateSplitRequest;
    suggestedStopPoint?: ApproximateProgress;
    suggestedStopPosition?: Position;
}
