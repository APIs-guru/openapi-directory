import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";



// BeginTransactionRequest
/** 
 * The request for Datastore.BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=transactionOptions" })
  transactionOptions?: TransactionOptions;
}
