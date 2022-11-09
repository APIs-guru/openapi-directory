import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// ListAccountsResponse
/** 
 * Response message for Accounts.ListAccounts.
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
