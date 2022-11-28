import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationResultBatch } from "./aggregationresultbatch";
import { AggregationQuery } from "./aggregationquery";
/**
 * The response for Datastore.RunAggregationQuery.
**/
export declare class RunAggregationQueryResponse extends SpeakeasyBase {
    batch?: AggregationResultBatch;
    query?: AggregationQuery;
}
