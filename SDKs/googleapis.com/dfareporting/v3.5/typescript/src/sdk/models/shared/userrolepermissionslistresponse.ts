import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";



// UserRolePermissionsListResponse
/** 
 * User Role Permission List Response
**/
export class UserRolePermissionsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=userRolePermissions", elemType: UserRolePermission })
  userRolePermissions?: UserRolePermission[];
}
