import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceUserCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    NotCompromised = "NOT_COMPROMISED"
}
export declare enum DeviceUserManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Wiping = "WIPING",
    Wiped = "WIPED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    PendingApproval = "PENDING_APPROVAL",
    Unenrolled = "UNENROLLED"
}
export declare enum DeviceUserPasswordStateEnum {
    PasswordStateUnspecified = "PASSWORD_STATE_UNSPECIFIED",
    PasswordSet = "PASSWORD_SET",
    PasswordNotSet = "PASSWORD_NOT_SET"
}
/**
 * Represents a user's use of a Device in the Cloud Identity Devices API. A DeviceUser is a resource representing a user's use of a Device
**/
export declare class DeviceUser extends SpeakeasyBase {
    compromisedState?: DeviceUserCompromisedStateEnum;
    createTime?: string;
    firstSyncTime?: string;
    languageCode?: string;
    lastSyncTime?: string;
    managementState?: DeviceUserManagementStateEnum;
    name?: string;
    passwordState?: DeviceUserPasswordStateEnum;
    userAgent?: string;
    userEmail?: string;
}
