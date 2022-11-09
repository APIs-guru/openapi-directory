import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistogramQueryResult
/** 
 * Histogram result that matches HistogramQuery specified in searches.
**/
export class HistogramQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=histogram" })
  histogram?: Map<string, string>;

  @Metadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
