import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountAccessPermissionEnum {
    AccountPermissionUnspecified = "accountPermissionUnspecified"
,    NoAccess = "noAccess"
,    User = "user"
,    Admin = "admin"
}


// AccountAccess
/** 
 * Defines the Google Tag Manager Account access permissions.
**/
export class AccountAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission" })
  permission?: AccountAccessPermissionEnum;
}
