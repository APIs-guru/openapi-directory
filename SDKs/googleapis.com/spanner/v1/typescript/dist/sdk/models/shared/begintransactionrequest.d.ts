import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
import { RequestOptions } from "./requestoptions";
/**
 * The request for BeginTransaction.
**/
export declare class BeginTransactionRequest extends SpeakeasyBase {
    options?: TransactionOptions;
    requestOptions?: RequestOptions;
}
