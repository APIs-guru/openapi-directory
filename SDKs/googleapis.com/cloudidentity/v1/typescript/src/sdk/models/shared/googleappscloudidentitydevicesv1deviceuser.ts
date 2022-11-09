import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED"
,    Compromised = "COMPROMISED"
,    NotCompromised = "NOT_COMPROMISED"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED"
,    Wiping = "WIPING"
,    Wiped = "WIPED"
,    Approved = "APPROVED"
,    Blocked = "BLOCKED"
,    PendingApproval = "PENDING_APPROVAL"
,    Unenrolled = "UNENROLLED"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum {
    PasswordStateUnspecified = "PASSWORD_STATE_UNSPECIFIED"
,    PasswordSet = "PASSWORD_SET"
,    PasswordNotSet = "PASSWORD_NOT_SET"
}


// GoogleAppsCloudidentityDevicesV1DeviceUser
/** 
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
export class GoogleAppsCloudidentityDevicesV1DeviceUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=compromisedState" })
  compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=firstSyncTime" })
  firstSyncTime?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @Metadata({ data: "json, name=managementState" })
  managementState?: GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=passwordState" })
  passwordState?: GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @Metadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
