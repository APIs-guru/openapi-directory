import { SpeakeasyBase } from "../../../internal/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";
/**
 * Options for beginning a new transaction. Transactions can be created explicitly with calls to Datastore.BeginTransaction or implicitly by setting ReadOptions.new_transaction in read requests.
**/
export declare class TransactionOptions extends SpeakeasyBase {
    readOnly?: ReadOnly;
    readWrite?: ReadWrite;
}
