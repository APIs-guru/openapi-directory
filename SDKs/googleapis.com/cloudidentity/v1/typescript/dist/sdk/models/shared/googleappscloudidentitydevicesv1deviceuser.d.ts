import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    NotCompromised = "NOT_COMPROMISED"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Wiping = "WIPING",
    Wiped = "WIPED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    PendingApproval = "PENDING_APPROVAL",
    Unenrolled = "UNENROLLED"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum {
    PasswordStateUnspecified = "PASSWORD_STATE_UNSPECIFIED",
    PasswordSet = "PASSWORD_SET",
    PasswordNotSet = "PASSWORD_NOT_SET"
}
/**
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
export declare class GoogleAppsCloudidentityDevicesV1DeviceUser extends SpeakeasyBase {
    compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceUserCompromisedStateEnum;
    createTime?: string;
    firstSyncTime?: string;
    languageCode?: string;
    lastSyncTime?: string;
    managementState?: GoogleAppsCloudidentityDevicesV1DeviceUserManagementStateEnum;
    name?: string;
    passwordState?: GoogleAppsCloudidentityDevicesV1DeviceUserPasswordStateEnum;
    userAgent?: string;
    userEmail?: string;
}
