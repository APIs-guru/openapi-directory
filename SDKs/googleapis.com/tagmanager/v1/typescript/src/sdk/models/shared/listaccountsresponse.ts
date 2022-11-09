import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Account } from "./account";


// ListAccountsResponse
/** 
 * List Accounts Response.
**/
export class ListAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accounts", elemType: shared.Account })
  accounts?: Account[];
}
