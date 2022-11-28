import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeldAccount } from "./heldaccount";
import { Status } from "./status";



// AddHeldAccountResult
/** 
 * The status of each account creation, and the **HeldAccount**, if successful.
**/
export class AddHeldAccountResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: HeldAccount;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Status;
}
