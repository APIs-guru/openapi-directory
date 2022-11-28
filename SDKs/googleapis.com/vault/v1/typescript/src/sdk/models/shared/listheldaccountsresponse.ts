import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeldAccount } from "./heldaccount";



// ListHeldAccountsResponse
/** 
 * Returns a list of the accounts covered by a hold.
**/
export class ListHeldAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: HeldAccount })
  accounts?: HeldAccount[];
}
