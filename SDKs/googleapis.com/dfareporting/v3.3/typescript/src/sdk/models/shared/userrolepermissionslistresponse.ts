import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserRolePermission } from "./userrolepermission";


// UserRolePermissionsListResponse
/** 
 * User Role Permission List Response
**/
export class UserRolePermissionsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=userRolePermissions", elemType: shared.UserRolePermission })
  userRolePermissions?: UserRolePermission[];
}
