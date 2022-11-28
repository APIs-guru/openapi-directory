import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { StructuredQuery } from "./structuredquery";
/**
 * The request for Firestore.RunQuery.
**/
export declare class RunQueryRequest extends SpeakeasyBase {
    newTransaction?: TransactionOptions;
    readTime?: string;
    structuredQuery?: StructuredQuery;
    transaction?: string;
}
