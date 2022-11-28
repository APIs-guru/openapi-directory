import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AccountSettingsObjectStorageEnum {
    Disabled = "disabled",
    Suspended = "suspended",
    Active = "active"
}
/**
 * Account Settings object
**/
export declare class AccountSettingsInput extends SpeakeasyBase {
    backupsEnabled?: boolean;
    networkHelper?: boolean;
}
/**
 * Account Settings object
**/
export declare class AccountSettings extends SpeakeasyBase {
    backupsEnabled?: boolean;
    longviewSubscription?: string;
    managed?: boolean;
    networkHelper?: boolean;
    objectStorage?: AccountSettingsObjectStorageEnum;
}
