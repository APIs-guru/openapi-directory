import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserPermission } from "./userpermission";


// ListUserPermissionsResponse
/** 
 * List user permissions response.
**/
export class ListUserPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=userPermission", elemType: shared.UserPermission })
  userPermission?: UserPermission[];
}
