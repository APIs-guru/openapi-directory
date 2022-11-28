import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredAggregationQuery } from "./structuredaggregationquery";
/**
 * The request for Firestore.RunAggregationQuery.
**/
export declare class RunAggregationQueryRequest extends SpeakeasyBase {
    newTransaction?: TransactionOptions;
    readTime?: string;
    structuredAggregationQuery?: StructuredAggregationQuery;
    transaction?: string;
}
