import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HistogramQuery
/** 
 * The histogram request.
**/
export class HistogramQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=histogramQuery" })
  histogramQuery?: string;
}
