import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeldAccount } from "./heldaccount";
import { Status } from "./status";


// AddHeldAccountResult
/** 
 * The status of each account creation, and the **HeldAccount**, if successful.
**/
export class AddHeldAccountResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: HeldAccount;

  @Metadata({ data: "json, name=status" })
  status?: Status;
}
