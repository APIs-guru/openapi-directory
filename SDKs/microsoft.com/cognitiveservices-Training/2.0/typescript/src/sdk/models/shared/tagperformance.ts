import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagPerformance
/** 
 * Represents performance data for a particular tag in a trained iteration
**/
export class TagPerformance extends SpeakeasyBase {
  @Metadata({ data: "json, name=averagePrecision" })
  averagePrecision?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=precision" })
  precision?: number;

  @Metadata({ data: "json, name=precisionStdDeviation" })
  precisionStdDeviation?: number;

  @Metadata({ data: "json, name=recall" })
  recall?: number;

  @Metadata({ data: "json, name=recallStdDeviation" })
  recallStdDeviation?: number;
}
