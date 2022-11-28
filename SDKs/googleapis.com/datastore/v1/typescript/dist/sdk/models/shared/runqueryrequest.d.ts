import { SpeakeasyBase } from "../../../internal/utils";
import { GqlQuery } from "./gqlquery";
import { PartitionId } from "./partitionid";
import { Query } from "./query";
import { ReadOptions } from "./readoptions";
/**
 * The request for Datastore.RunQuery.
**/
export declare class RunQueryRequest extends SpeakeasyBase {
    databaseId?: string;
    gqlQuery?: GqlQuery;
    partitionId?: PartitionId;
    query?: Query;
    readOptions?: ReadOptions;
}
