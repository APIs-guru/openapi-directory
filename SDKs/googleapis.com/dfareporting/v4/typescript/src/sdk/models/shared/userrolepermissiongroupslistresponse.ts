import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserRolePermissionGroup } from "./userrolepermissiongroup";


// UserRolePermissionGroupsListResponse
/** 
 * User Role Permission Group List Response
**/
export class UserRolePermissionGroupsListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=userRolePermissionGroups", elemType: shared.UserRolePermissionGroup })
  userRolePermissionGroups?: UserRolePermissionGroup[];
}
