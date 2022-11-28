import { SpeakeasyBase } from "../../../internal/utils";
import { QueryResultBatch } from "./queryresultbatch";
import { Query } from "./query";
/**
 * The response for Datastore.RunQuery.
**/
export declare class RunQueryResponse extends SpeakeasyBase {
    batch?: QueryResultBatch;
    query?: Query;
}
