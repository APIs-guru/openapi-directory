import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionOptions } from "./transactionoptions";
/**
 * This message is used to select the transaction in which a Read or ExecuteSql call runs. See TransactionOptions for more information about transactions.
**/
export declare class TransactionSelector extends SpeakeasyBase {
    begin?: TransactionOptions;
    id?: string;
    singleUse?: TransactionOptions;
}
