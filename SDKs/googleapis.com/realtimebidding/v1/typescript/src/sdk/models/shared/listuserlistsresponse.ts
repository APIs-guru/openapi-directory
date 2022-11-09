import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserList } from "./userlist";


// ListUserListsResponse
/** 
 * The list user list response.
**/
export class ListUserListsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userLists", elemType: shared.UserList })
  userLists?: UserList[];
}
