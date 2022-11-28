import { SpeakeasyBase } from "../../../internal/utils";
import { Aggregation } from "./aggregation";
import { Query } from "./query";
/**
 * Datastore query for running an aggregation over a Query.
**/
export declare class AggregationQuery extends SpeakeasyBase {
    aggregations?: Aggregation[];
    nestedQuery?: Query;
}
