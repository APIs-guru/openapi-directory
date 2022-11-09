import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDataRow } from "./apidatarow";


// SearchAnalyticsQueryResponse
/** 
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
**/
export class SearchAnalyticsQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responseAggregationType" })
  responseAggregationType?: string;

  @Metadata({ data: "json, name=rows", elemType: shared.ApiDataRow })
  rows?: ApiDataRow[];
}
