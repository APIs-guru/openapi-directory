import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountAccessPermissionEnum {
    AccountPermissionUnspecified = "accountPermissionUnspecified",
    NoAccess = "noAccess",
    User = "user",
    Admin = "admin"
}
/**
 * Defines the Google Tag Manager Account access permissions.
**/
export declare class AccountAccess extends SpeakeasyBase {
    permission?: AccountAccessPermissionEnum;
}
