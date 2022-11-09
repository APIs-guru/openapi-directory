import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveHeldAccountsRequest
/** 
 * Remove a list of accounts from a hold.
**/
export class RemoveHeldAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];
}
