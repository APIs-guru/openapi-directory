import { SpeakeasyBase } from "../../../internal/utils";
import { ReadOnly } from "./readonly";
import { ReadWrite } from "./readwrite";
/**
 * Options for creating a new transaction.
**/
export declare class TransactionOptions extends SpeakeasyBase {
    readOnly?: ReadOnly;
    readWrite?: ReadWrite;
}
