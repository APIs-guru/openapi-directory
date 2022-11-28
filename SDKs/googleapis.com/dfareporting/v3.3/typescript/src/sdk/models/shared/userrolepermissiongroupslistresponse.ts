import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermissionGroup } from "./userrolepermissiongroup";



// UserRolePermissionGroupsListResponse
/** 
 * User Role Permission Group List Response
**/
export class UserRolePermissionGroupsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=userRolePermissionGroups", elemType: UserRolePermissionGroup })
  userRolePermissionGroups?: UserRolePermissionGroup[];
}
