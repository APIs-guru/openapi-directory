import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Aggregation } from "./aggregation";
import { StructuredQuery } from "./structuredquery";


// StructuredAggregationQuery
/** 
 * Firestore query for running an aggregation over a StructuredQuery.
**/
export class StructuredAggregationQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregations", elemType: shared.Aggregation })
  aggregations?: Aggregation[];

  @Metadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
