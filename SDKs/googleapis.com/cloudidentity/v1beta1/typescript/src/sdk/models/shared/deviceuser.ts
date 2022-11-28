import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DeviceUserCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    NotCompromised = "NOT_COMPROMISED"
}

export enum DeviceUserManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Wiping = "WIPING",
    Wiped = "WIPED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    PendingApproval = "PENDING_APPROVAL",
    Unenrolled = "UNENROLLED"
}

export enum DeviceUserPasswordStateEnum {
    PasswordStateUnspecified = "PASSWORD_STATE_UNSPECIFIED",
    PasswordSet = "PASSWORD_SET",
    PasswordNotSet = "PASSWORD_NOT_SET"
}


// DeviceUser
/** 
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
export class DeviceUser extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compromisedState" })
  compromisedState?: DeviceUserCompromisedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=firstSyncTime" })
  firstSyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=managementState" })
  managementState?: DeviceUserManagementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=passwordState" })
  passwordState?: DeviceUserPasswordStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=userEmail" })
  userEmail?: string;
}
