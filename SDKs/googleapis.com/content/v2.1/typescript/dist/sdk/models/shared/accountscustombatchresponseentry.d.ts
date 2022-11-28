import { SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";
import { Errors } from "./errors";
/**
 * A batch entry encoding a single non-batch accounts response.
**/
export declare class AccountsCustomBatchResponseEntry extends SpeakeasyBase {
    account?: Account;
    batchId?: number;
    errors?: Errors;
    kind?: string;
}
