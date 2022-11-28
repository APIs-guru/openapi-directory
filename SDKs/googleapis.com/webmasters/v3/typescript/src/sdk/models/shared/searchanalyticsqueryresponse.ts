import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDataRow } from "./apidatarow";



// SearchAnalyticsQueryResponse
/** 
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
**/
export class SearchAnalyticsQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responseAggregationType" })
  responseAggregationType?: string;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: ApiDataRow })
  rows?: ApiDataRow[];
}
