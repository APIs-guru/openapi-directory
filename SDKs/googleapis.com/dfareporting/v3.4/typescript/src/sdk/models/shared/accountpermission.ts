import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountPermissionAccountProfilesEnum {
    AccountProfileBasic = "ACCOUNT_PROFILE_BASIC",
    AccountProfileStandard = "ACCOUNT_PROFILE_STANDARD"
}

export enum AccountPermissionLevelEnum {
    User = "USER",
    Administrator = "ADMINISTRATOR"
}


// AccountPermission
/** 
 * AccountPermissions contains information about a particular account permission. Some features of Campaign Manager require an account permission to be present in the account.
**/
export class AccountPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountProfiles" })
  accountProfiles?: AccountPermissionAccountProfilesEnum[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: AccountPermissionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: string;
}
