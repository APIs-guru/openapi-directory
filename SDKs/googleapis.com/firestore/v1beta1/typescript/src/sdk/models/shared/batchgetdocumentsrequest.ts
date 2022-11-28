import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DocumentMask } from "./documentmask";
import { TransactionOptions } from "./transactionoptions";



// BatchGetDocumentsRequest
/** 
 * The request for Firestore.BatchGetDocuments.
**/
export class BatchGetDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];

  @SpeakeasyMetadata({ data: "json, name=mask" })
  mask?: DocumentMask;

  @SpeakeasyMetadata({ data: "json, name=newTransaction" })
  newTransaction?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
