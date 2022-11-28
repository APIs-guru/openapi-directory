import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// RemoveHeldAccountsResponse
/** 
 * Response for batch delete held accounts.
**/
export class RemoveHeldAccountsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: Status })
  statuses?: Status[];
}
