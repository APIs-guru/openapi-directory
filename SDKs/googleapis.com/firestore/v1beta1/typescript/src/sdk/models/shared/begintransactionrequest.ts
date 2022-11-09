import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";


// BeginTransactionRequest
/** 
 * The request for Firestore.BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: TransactionOptions;
}
