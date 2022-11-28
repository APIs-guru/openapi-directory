import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagPerformance } from "./tagperformance";



// IterationPerformance
/** 
 * Represents the detailed performance data for a trained iteration
**/
export class IterationPerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePrecision" })
  averagePrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=perTagPerformance", elemType: TagPerformance })
  perTagPerformance?: TagPerformance[];

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=precisionStdDeviation" })
  precisionStdDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=recallStdDeviation" })
  recallStdDeviation?: number;
}
