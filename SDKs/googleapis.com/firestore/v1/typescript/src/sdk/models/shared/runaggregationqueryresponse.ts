import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AggregationResult } from "./aggregationresult";


// RunAggregationQueryResponse
/** 
 * The response for Firestore.RunAggregationQuery.
**/
export class RunAggregationQueryResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=result" })
  result?: AggregationResult;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
