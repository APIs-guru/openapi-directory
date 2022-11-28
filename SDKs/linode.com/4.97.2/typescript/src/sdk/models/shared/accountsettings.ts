import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccountSettingsObjectStorageEnum {
    Disabled = "disabled",
    Suspended = "suspended",
    Active = "active"
}


// AccountSettingsInput
/** 
 * Account Settings object
**/
export class AccountSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network_helper" })
  networkHelper?: boolean;
}


// AccountSettings
/** 
 * Account Settings object
**/
export class AccountSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=longview_subscription" })
  longviewSubscription?: string;

  @SpeakeasyMetadata({ data: "json, name=managed" })
  managed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=network_helper" })
  networkHelper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=object_storage" })
  objectStorage?: AccountSettingsObjectStorageEnum;
}
