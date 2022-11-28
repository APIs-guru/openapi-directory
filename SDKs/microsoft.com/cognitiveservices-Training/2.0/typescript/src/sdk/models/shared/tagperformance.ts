import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagPerformance
/** 
 * Represents performance data for a particular tag in a trained iteration
**/
export class TagPerformance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averagePrecision" })
  averagePrecision?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=precision" })
  precision?: number;

  @SpeakeasyMetadata({ data: "json, name=precisionStdDeviation" })
  precisionStdDeviation?: number;

  @SpeakeasyMetadata({ data: "json, name=recall" })
  recall?: number;

  @SpeakeasyMetadata({ data: "json, name=recallStdDeviation" })
  recallStdDeviation?: number;
}
