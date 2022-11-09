import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TransactionOptions } from "./transactionoptions";
import { RequestOptions } from "./requestoptions";


// BeginTransactionRequest
/** 
 * The request for BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options?: TransactionOptions;

  @Metadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;
}
