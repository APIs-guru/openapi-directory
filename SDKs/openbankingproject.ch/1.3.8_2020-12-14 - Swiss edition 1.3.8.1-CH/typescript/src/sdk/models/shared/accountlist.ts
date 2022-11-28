import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccountDetails } from "./accountdetails";



// AccountList
/** 
 * List of accounts with details.
 * 
**/
export class AccountList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: AccountDetails })
  accounts: AccountDetails[];
}
