import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserAccess } from "./useraccess";



// ListAccountUsersResponse
/** 
 * List AccountUsers Response.
**/
export class ListAccountUsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userAccess", elemType: UserAccess })
  userAccess?: UserAccess[];
}
