import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportedParallelism } from "./reportedparallelism";
import { Position } from "./position";



// ApproximateReportedProgress
/** 
 * A progress measurement of a WorkItem by a worker.
**/
export class ApproximateReportedProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumedParallelism" })
  consumedParallelism?: ReportedParallelism;

  @SpeakeasyMetadata({ data: "json, name=fractionConsumed" })
  fractionConsumed?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Position;

  @SpeakeasyMetadata({ data: "json, name=remainingParallelism" })
  remainingParallelism?: ReportedParallelism;
}
