import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AddHeldAccountResult } from "./addheldaccountresult";



// AddHeldAccountsResponse
/** 
 * Response for batch create held accounts.
**/
export class AddHeldAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=responses", elemType: AddHeldAccountResult })
  responses?: AddHeldAccountResult[];
}
