import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountAccessPermissionEnum {
    Read = "read",
    Edit = "edit",
    Publish = "publish",
    Delete = "delete",
    Manage = "manage",
    EditWorkspace = "editWorkspace"
}
/**
 * Defines the Google Tag Manager Account access permissions.
**/
export declare class AccountAccess extends SpeakeasyBase {
    permission?: AccountAccessPermissionEnum[];
}
