import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddHeldAccountsRequest
/** 
 * Add a list of accounts to a hold.
**/
export class AddHeldAccountsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=emails" })
  emails?: string[];
}
