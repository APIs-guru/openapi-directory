import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



// UsersListResponse
/** 
 * User list response.
**/
export class UsersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: User })
  items?: User[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
