import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
/**
 * The request for Datastore.BeginTransaction.
**/
export declare class BeginTransactionRequest extends SpeakeasyBase {
    transactionOptions?: TransactionOptions;
}
