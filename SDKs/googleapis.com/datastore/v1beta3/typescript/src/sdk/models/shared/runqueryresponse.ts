import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryResultBatch } from "./queryresultbatch";
import { Query } from "./query";



// RunQueryResponse
/** 
 * The response for Datastore.RunQuery.
**/
export class RunQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: QueryResultBatch;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Query;
}
