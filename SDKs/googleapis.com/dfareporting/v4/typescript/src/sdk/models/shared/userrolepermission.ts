import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserRolePermissionAvailabilityEnum {
    NotAvailableByDefault = "NOT_AVAILABLE_BY_DEFAULT",
    AccountByDefault = "ACCOUNT_BY_DEFAULT",
    SubaccountAndAccountByDefault = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT",
    AccountAlways = "ACCOUNT_ALWAYS",
    SubaccountAndAccountAlways = "SUBACCOUNT_AND_ACCOUNT_ALWAYS",
    UserProfileOnly = "USER_PROFILE_ONLY"
}


// UserRolePermission
/** 
 * Contains properties of a user role permission.
**/
export class UserRolePermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availability" })
  availability?: UserRolePermissionAvailabilityEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: string;
}
