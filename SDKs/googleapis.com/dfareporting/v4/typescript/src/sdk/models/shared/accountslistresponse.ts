import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// AccountsListResponse
/** 
 * Account List Response
**/
export class AccountsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
