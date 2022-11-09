import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AddHeldAccountResult } from "./addheldaccountresult";


// AddHeldAccountsResponse
/** 
 * Response for batch create held accounts.
**/
export class AddHeldAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=responses", elemType: shared.AddHeldAccountResult })
  responses?: AddHeldAccountResult[];
}
