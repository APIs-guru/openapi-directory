import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// ListAccountsResponse
/** 
 * List Accounts Response.
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account", elemType: Account })
  account?: Account[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
