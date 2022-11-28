import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { StructuredQuery } from "./structuredquery";
/**
 * Firestore query for running an aggregation over a StructuredQuery.
**/
export declare class StructuredAggregationQuery extends SpeakeasyBase {
    aggregations?: Aggregation[];
    structuredQuery?: StructuredQuery;
}
