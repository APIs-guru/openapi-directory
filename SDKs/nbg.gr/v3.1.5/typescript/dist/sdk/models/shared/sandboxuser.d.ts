import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxBankAccount } from "./sandboxbankaccount";
import { SandboxCard } from "./sandboxcard";
import { SandboxRetryCacheEntry } from "./sandboxretrycacheentry";
/**
 * User data
**/
export declare class SandboxUser extends SpeakeasyBase {
    accounts?: SandboxBankAccount[];
    cards?: SandboxCard[];
    retryCacheEntries?: SandboxRetryCacheEntry[];
    userId?: string;
}
