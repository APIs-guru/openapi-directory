import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { User } from "./user";


// UsersListResponse
/** 
 * User list response.
**/
export class UsersListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.User })
  items?: User[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
