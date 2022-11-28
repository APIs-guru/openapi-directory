import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredAggregationQuery } from "./structuredaggregationquery";



// RunAggregationQueryRequest
/** 
 * The request for Firestore.RunAggregationQuery.
**/
export class RunAggregationQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=structuredAggregationQuery" })
  structuredAggregationQuery?: StructuredAggregationQuery;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
