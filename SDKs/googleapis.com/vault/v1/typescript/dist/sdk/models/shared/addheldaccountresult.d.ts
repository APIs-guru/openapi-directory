import { SpeakeasyBase } from "../../../internal/utils";
import { HeldAccount } from "./heldaccount";
import { Status } from "./status";
/**
 * The status of each account creation, and the **HeldAccount**, if successful.
**/
export declare class AddHeldAccountResult extends SpeakeasyBase {
    account?: HeldAccount;
    status?: Status;
}
