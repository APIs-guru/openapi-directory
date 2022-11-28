import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HistogramQueryResult
/** 
 * Output only. Histogram result that matches HistogramSpec specified in searches.
**/
export class HistogramQueryResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=histogram" })
  histogram?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
