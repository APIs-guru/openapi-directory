import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * The result of a single bucket from a Datastore aggregation query. The keys of `aggregate_properties` are the same for all results in an aggregation query, unlike entity queries which can have different fields present for each result.
**/
export declare class AggregationResult extends SpeakeasyBase {
    aggregateProperties?: Map<string, Value>;
}
