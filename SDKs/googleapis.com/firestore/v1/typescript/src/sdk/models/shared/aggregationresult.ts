import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// AggregationResult
/** 
 * The result of a single bucket from a Firestore aggregation query. The keys of `aggregate_fields` are the same for all results in an aggregation query, unlike document queries which can have different fields present for each result.
**/
export class AggregationResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregateFields", elemType: shared.Value })
  aggregateFields?: Map<string, Value>;
}
