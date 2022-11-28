import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UserRolePermissionAvailabilityEnum {
    NotAvailableByDefault = "NOT_AVAILABLE_BY_DEFAULT",
    AccountByDefault = "ACCOUNT_BY_DEFAULT",
    SubaccountAndAccountByDefault = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT",
    AccountAlways = "ACCOUNT_ALWAYS",
    SubaccountAndAccountAlways = "SUBACCOUNT_AND_ACCOUNT_ALWAYS",
    UserProfileOnly = "USER_PROFILE_ONLY"
}
/**
 * Contains properties of a user role permission.
**/
export declare class UserRolePermission extends SpeakeasyBase {
    availability?: UserRolePermissionAvailabilityEnum;
    id?: string;
    kind?: string;
    name?: string;
    permissionGroupId?: string;
}
