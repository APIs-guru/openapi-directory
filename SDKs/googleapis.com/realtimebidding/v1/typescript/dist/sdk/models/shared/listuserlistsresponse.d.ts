import { SpeakeasyBase } from "../../../internal/utils";
import { UserList } from "./userlist";
/**
 * The list user list response.
**/
export declare class ListUserListsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    userLists?: UserList[];
}
