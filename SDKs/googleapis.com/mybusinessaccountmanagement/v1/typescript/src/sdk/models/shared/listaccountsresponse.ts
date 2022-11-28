import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// ListAccountsResponse
/** 
 * Response message for Accounts.ListAccounts.
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
