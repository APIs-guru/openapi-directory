import { SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";
/**
 * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
**/
export declare class AggregationResult extends SpeakeasyBase {
    aggregateFields?: Map<string, Value>;
}
