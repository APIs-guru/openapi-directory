import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TagPerformance } from "./tagperformance";


// IterationPerformance
/** 
 * Represents the detailed performance data for a trained iteration
**/
export class IterationPerformance extends SpeakeasyBase {
  @Metadata({ data: "json, name=averagePrecision" })
  averagePrecision?: number;

  @Metadata({ data: "json, name=perTagPerformance", elemType: shared.TagPerformance })
  perTagPerformance?: TagPerformance[];

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=precisionStdDeviation" })
  precisionStdDeviation?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=recallStdDeviation" })
  recallStdDeviation?: number;
}
