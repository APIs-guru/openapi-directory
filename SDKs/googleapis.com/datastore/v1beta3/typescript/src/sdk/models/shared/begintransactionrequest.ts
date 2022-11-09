import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";


// BeginTransactionRequest
/** 
 * The request for Datastore.BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=transactionOptions" })
  transactionOptions?: TransactionOptions;
}
