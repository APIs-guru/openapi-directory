import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserPermission } from "./userpermission";



// ListUserPermissionsResponse
/** 
 * List user permissions response.
**/
export class ListUserPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=userPermission", elemType: UserPermission })
  userPermission?: UserPermission[];
}
