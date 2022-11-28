import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDataRow } from "./apidatarow";
/**
 * A list of rows, one per result, grouped by key. Metrics in each row are aggregated for all data grouped by that key either by page or property, as specified by the aggregation type parameter.
**/
export declare class SearchAnalyticsQueryResponse extends SpeakeasyBase {
    responseAggregationType?: string;
    rows?: ApiDataRow[];
}
