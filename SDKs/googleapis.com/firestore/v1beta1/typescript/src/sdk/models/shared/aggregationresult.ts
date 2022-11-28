import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// AggregationResult
/** 
 * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
**/
export class AggregationResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregateFields", elemType: Value })
  aggregateFields?: Map<string, Value>;
}
