import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveHeldAccountsRequest
/** 
 * Remove a list of accounts from a hold.
**/
export class RemoveHeldAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];
}
