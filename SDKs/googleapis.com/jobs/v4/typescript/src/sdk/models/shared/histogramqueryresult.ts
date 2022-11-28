import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistogramQueryResult
/** 
 * Histogram result that matches HistogramQuery specified in searches.
**/
export class HistogramQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogram" })
  histogram?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
