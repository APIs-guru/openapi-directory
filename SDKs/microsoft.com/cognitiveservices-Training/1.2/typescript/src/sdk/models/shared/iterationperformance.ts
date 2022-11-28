import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagPerformance } from "./tagperformance";



// IterationPerformance
/** 
 * Represents the detailed performance data for a trained iteration
**/
export class IterationPerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PerTagPerformance", elemType: TagPerformance })
  perTagPerformance?: TagPerformance[];

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=PrecisionStdDeviation" })
  precisionStdDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=RecallStdDeviation" })
  recallStdDeviation?: number;
}
