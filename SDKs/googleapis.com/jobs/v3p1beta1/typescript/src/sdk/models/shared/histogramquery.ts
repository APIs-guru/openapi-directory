import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistogramQuery
/** 
 * Input Only. The histogram request.
**/
export class HistogramQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
