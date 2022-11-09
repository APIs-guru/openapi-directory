import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QueryResultBatch } from "./queryresultbatch";
import { Query } from "./query";


// RunQueryResponse
/** 
 * The response for Datastore.RunQuery.
**/
export class RunQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=batch" })
  batch?: QueryResultBatch;

  @Metadata({ data: "json, name=query" })
  query?: Query;
}
