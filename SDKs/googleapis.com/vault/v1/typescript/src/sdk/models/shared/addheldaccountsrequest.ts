import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddHeldAccountsRequest
/** 
 * Add a list of accounts to a hold.
**/
export class AddHeldAccountsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountIds" })
  accountIds?: string[];

  @Metadata({ data: "json, name=emails" })
  emails?: string[];
}
