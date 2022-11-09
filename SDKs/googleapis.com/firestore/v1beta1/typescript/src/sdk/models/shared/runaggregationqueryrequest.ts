import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredAggregationQuery } from "./structuredaggregationquery";


// RunAggregationQueryRequest
/** 
 * The request for Firestore.RunAggregationQuery.
**/
export class RunAggregationQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=structuredAggregationQuery" })
  structuredAggregationQuery?: StructuredAggregationQuery;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
