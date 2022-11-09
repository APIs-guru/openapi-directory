import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserRolePermissionAvailabilityEnum {
    NotAvailableByDefault = "NOT_AVAILABLE_BY_DEFAULT"
,    AccountByDefault = "ACCOUNT_BY_DEFAULT"
,    SubaccountAndAccountByDefault = "SUBACCOUNT_AND_ACCOUNT_BY_DEFAULT"
,    AccountAlways = "ACCOUNT_ALWAYS"
,    SubaccountAndAccountAlways = "SUBACCOUNT_AND_ACCOUNT_ALWAYS"
,    UserProfileOnly = "USER_PROFILE_ONLY"
}


// UserRolePermission
/** 
 * Contains properties of a user role permission.
**/
export class UserRolePermission extends SpeakeasyBase {
  @Metadata({ data: "json, name=availability" })
  availability?: UserRolePermissionAvailabilityEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=permissionGroupId" })
  permissionGroupId?: string;
}
