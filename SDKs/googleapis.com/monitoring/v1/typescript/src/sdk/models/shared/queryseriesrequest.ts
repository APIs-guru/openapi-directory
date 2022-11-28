import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuerySeriesRequest
/** 
 * QuerySeries holds all parameters of the Prometheus upstream API for querying series.
**/
export class QuerySeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
