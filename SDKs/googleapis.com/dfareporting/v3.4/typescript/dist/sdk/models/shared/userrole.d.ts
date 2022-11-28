import { SpeakeasyBase } from "../../../internal/utils";
import { UserRolePermission } from "./userrolepermission";
/**
 * Contains properties of auser role, which is used to manage user access.
**/
export declare class UserRole extends SpeakeasyBase {
    accountId?: string;
    defaultUserRole?: boolean;
    id?: string;
    kind?: string;
    name?: string;
    parentUserRoleId?: string;
    permissions?: UserRolePermission[];
    subaccountId?: string;
}
