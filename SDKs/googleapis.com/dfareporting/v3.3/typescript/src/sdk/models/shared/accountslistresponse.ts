import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Account } from "./account";



// AccountsListResponse
/** 
 * Account List Response
**/
export class AccountsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accounts", elemType: Account })
  accounts?: Account[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
