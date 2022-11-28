import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountPermissionAccountProfilesEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}
export declare enum AccountPermissionLevelEnum {
    User = "USER",
    Administrator = "ADMINISTRATOR"
}
/**
 * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
**/
export declare class AccountPermission extends SpeakeasyBase {
    accountProfiles?: AccountPermissionAccountProfilesEnum[];
    id?: string;
    kind?: string;
    level?: AccountPermissionLevelEnum;
    name?: string;
    permissionGroupId?: string;
}
