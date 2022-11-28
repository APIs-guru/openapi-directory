import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagPerformance
/** 
 * Represents performance data for a particular tag in a trained iteration
**/
export class TagPerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=PrecisionStdDeviation" })
  precisionStdDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=Recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=RecallStdDeviation" })
  recallStdDeviation?: number;
}
