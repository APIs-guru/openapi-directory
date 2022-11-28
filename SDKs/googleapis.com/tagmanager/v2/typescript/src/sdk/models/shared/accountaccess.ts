import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountAccessPermissionEnum {
    AccountPermissionUnspecified = "accountPermissionUnspecified",
    NoAccess = "noAccess",
    User = "user",
    Admin = "admin"
}


// AccountAccess
/** 
 * Defines the Google Tag Manager Account access permissions.
**/
export class AccountAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission" })
  permission?: AccountAccessPermissionEnum;
}
