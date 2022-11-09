import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuerySeriesRequest
/** 
 * QuerySeries holds all parameters of the Prometheus upstream API for querying series.
**/
export class QuerySeriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=end" })
  end?: string;

  @Metadata({ data: "json, name=start" })
  start?: string;
}
