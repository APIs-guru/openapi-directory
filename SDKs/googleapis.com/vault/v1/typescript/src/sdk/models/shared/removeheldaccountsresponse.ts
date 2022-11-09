import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Status } from "./status";


// RemoveHeldAccountsResponse
/** 
 * Response for batch delete held accounts.
**/
export class RemoveHeldAccountsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=statuses", elemType: shared.Status })
  statuses?: Status[];
}
