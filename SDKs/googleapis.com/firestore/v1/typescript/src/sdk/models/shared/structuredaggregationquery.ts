import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { StructuredQuery } from "./structuredquery";



// StructuredAggregationQuery
/** 
 * Firestore query for running an aggregation over a StructuredQuery.
**/
export class StructuredAggregationQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregations", elemType: Aggregation })
  aggregations?: Aggregation[];

  @SpeakeasyMetadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
