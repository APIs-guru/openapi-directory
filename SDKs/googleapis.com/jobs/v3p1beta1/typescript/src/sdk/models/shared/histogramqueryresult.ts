import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistogramQueryResult
/** 
 * Output only. Histogram result that matches HistogramSpec specified in searches.
**/
export class HistogramQueryResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=histogram" })
  histogram?: Map<string, string>;

  @Metadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
