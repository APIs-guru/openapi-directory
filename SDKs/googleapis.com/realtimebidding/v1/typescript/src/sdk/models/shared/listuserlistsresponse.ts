import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserList } from "./userlist";



// ListUserListsResponse
/** 
 * The list user list response.
**/
export class ListUserListsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userLists", elemType: UserList })
  userLists?: UserList[];
}
