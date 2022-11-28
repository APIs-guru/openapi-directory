import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMask } from "./documentmask";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Firestore.BatchGetDocuments.
**/
export declare class BatchGetDocumentsRequest extends SpeakeasyBase {
    documents?: string[];
    mask?: DocumentMask;
    newTransaction?: TransactionOptions;
    readTime?: string;
    transaction?: string;
}
