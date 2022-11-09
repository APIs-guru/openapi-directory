import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagPerformance } from "./tagperformance";


// IterationPerformance
/** 
 * Represents the detailed performance data for a trained iteration
**/
export class IterationPerformance extends SpeakeasyBase {
  @Metadata({ data: "json, name=PerTagPerformance", elemType: shared.TagPerformance })
  perTagPerformance?: TagPerformance[];

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=PrecisionStdDeviation" })
  precisionStdDeviation?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;

  @Metadata({ data: "json, name=RecallStdDeviation" })
  recallStdDeviation?: number;
}
