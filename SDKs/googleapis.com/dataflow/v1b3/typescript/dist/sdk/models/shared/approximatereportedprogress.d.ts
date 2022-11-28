import { SpeakeasyBase } from "../../../internal/utils";
import { ReportedParallelism } from "./reportedparallelism";
import { Position } from "./position";
/**
 * A progress measurement of a WorkItem by a worker.
**/
export declare class ApproximateReportedProgress extends SpeakeasyBase {
    consumedParallelism?: ReportedParallelism;
    fractionConsumed?: number;
    position?: Position;
    remainingParallelism?: ReportedParallelism;
}
