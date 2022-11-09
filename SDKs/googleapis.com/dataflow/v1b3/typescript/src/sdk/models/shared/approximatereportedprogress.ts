import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReportedParallelism } from "./reportedparallelism";
import { Position } from "./position";
import { ReportedParallelism } from "./reportedparallelism";


// ApproximateReportedProgress
/** 
 * A progress measurement of a WorkItem by a worker.
**/
export class ApproximateReportedProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumedParallelism" })
  consumedParallelism?: ReportedParallelism;

  @Metadata({ data: "json, name=fractionConsumed" })
  fractionConsumed?: number;

  @Metadata({ data: "json, name=position" })
  position?: Position;

  @Metadata({ data: "json, name=remainingParallelism" })
  remainingParallelism?: ReportedParallelism;
}
