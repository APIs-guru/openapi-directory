import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { RequestOptions } from "./requestoptions";



// BeginTransactionRequest
/** 
 * The request for BeginTransaction.
**/
export class BeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: TransactionOptions;

  @SpeakeasyMetadata({ data: "json, name=requestOptions" })
  requestOptions?: RequestOptions;
}
