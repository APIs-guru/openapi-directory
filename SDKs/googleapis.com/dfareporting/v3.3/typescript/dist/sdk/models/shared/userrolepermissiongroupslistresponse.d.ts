import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermissionGroup } from "./userrolepermissiongroup";
/**
 * User Role Permission Group List Response
**/
export declare class UserRolePermissionGroupsListResponse extends SpeakeasyBase {
    kind?: string;
    userRolePermissionGroups?: UserRolePermissionGroup[];
}
