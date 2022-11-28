import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";
/**
 * User Role Permission List Response
**/
export declare class UserRolePermissionsListResponse extends SpeakeasyBase {
    kind?: string;
    userRolePermissions?: UserRolePermission[];
}
