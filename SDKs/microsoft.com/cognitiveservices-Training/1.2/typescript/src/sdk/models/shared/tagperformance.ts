import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagPerformance
/** 
 * Represents performance data for a particular tag in a trained iteration
**/
export class TagPerformance extends SpeakeasyBase {
  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Precision" })
  precision?: number;

  @Metadata({ data: "json, name=PrecisionStdDeviation" })
  precisionStdDeviation?: number;

  @Metadata({ data: "json, name=Recall" })
  recall?: number;

  @Metadata({ data: "json, name=RecallStdDeviation" })
  recallStdDeviation?: number;
}
