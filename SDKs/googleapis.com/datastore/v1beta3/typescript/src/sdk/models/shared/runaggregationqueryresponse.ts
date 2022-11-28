import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationResultBatch } from "./aggregationresultbatch";
import { AggregationQuery } from "./aggregationquery";



// RunAggregationQueryResponse
/** 
 * The response for Datastore.RunAggregationQuery.
**/
export class RunAggregationQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=batch" })
  batch?: AggregationResultBatch;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: AggregationQuery;
}
