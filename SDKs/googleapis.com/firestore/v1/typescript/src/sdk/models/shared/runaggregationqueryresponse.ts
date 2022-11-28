import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AggregationResult } from "./aggregationresult";



// RunAggregationQueryResponse
/** 
 * The response for Firestore.RunAggregationQuery.
**/
export class RunAggregationQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: AggregationResult;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
