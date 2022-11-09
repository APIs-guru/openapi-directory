import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccountDetails } from "./accountdetails";


// AccountList
/** 
 * List of accounts with details.
 * 
**/
export class AccountList extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.AccountDetails })
  accounts: AccountDetails[];
}
