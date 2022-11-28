import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";



// BeginTransactionRequest
/** 
 * The request for Firestore.BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: TransactionOptions;
}
