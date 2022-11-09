import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HeldAccount } from "./heldaccount";


// ListHeldAccountsResponse
/** 
 * Returns a list of the accounts covered by a hold.
**/
export class ListHeldAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.HeldAccount })
  accounts?: HeldAccount[];
}
