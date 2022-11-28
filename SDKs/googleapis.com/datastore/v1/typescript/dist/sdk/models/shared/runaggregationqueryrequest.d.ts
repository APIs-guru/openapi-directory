import { SpeakeasyBase } from "../../../internal/utils";
import { AggregationQuery } from "./aggregationquery";
import { GqlQuery } from "./gqlquery";
import { PartitionId } from "./partitionid";
import { ReadOptions } from "./readoptions";
/**
 * The request for Datastore.RunAggregationQuery.
**/
export declare class RunAggregationQueryRequest extends SpeakeasyBase {
    aggregationQuery?: AggregationQuery;
    databaseId?: string;
    gqlQuery?: GqlQuery;
    partitionId?: PartitionId;
    readOptions?: ReadOptions;
}
