import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserAccess } from "./useraccess";


// ListAccountUsersResponse
/** 
 * List AccountUsers Response.
**/
export class ListAccountUsersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=userAccess", elemType: shared.UserAccess })
  userAccess?: UserAccess[];
}
