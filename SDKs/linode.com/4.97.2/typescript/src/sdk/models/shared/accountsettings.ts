import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccountSettingsObjectStorageEnum {
    Disabled = "disabled"
,    Suspended = "suspended"
,    Active = "active"
}


// AccountSettings
/** 
 * Account Settings object
**/
export class AccountSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @Metadata({ data: "json, name=longview_subscription" })
  longviewSubscription?: string;

  @Metadata({ data: "json, name=managed" })
  managed?: boolean;

  @Metadata({ data: "json, name=network_helper" })
  networkHelper?: boolean;

  @Metadata({ data: "json, name=object_storage" })
  objectStorage?: AccountSettingsObjectStorageEnum;
}
