import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DocumentMask } from "./documentmask";
import { TransactionOptions } from "./transactionoptions";


// BatchGetDocumentsRequest
/** 
 * The request for Firestore.BatchGetDocuments.
**/
export class BatchGetDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents" })
  documents?: string[];

  @Metadata({ data: "json, name=mask" })
  mask?: DocumentMask;

  @Metadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
