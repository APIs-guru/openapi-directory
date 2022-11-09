import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountPermissionAccountProfilesEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC"
,    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}

export enum AccountPermissionLevelEnum {
    User = "USER"
,    Administrator = "ADMINISTRATOR"
}


// AccountPermission
/** 
 * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
**/
export class AccountPermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountProfiles" })
  accountProfiles?: AccountPermissionAccountProfilesEnum[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=level" })
  level?: AccountPermissionLevelEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: string;
}
