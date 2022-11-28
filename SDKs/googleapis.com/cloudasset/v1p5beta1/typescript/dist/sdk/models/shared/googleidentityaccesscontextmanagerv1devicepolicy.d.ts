import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1OsConstraint } from "./googleidentityaccesscontextmanagerv1osconstraint";
export declare enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    None = "NONE",
    Basic = "BASIC",
    Complete = "COMPLETE"
}
export declare enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum {
    EncryptionUnspecified = "ENCRYPTION_UNSPECIFIED",
    EncryptionUnsupported = "ENCRYPTION_UNSUPPORTED",
    Unencrypted = "UNENCRYPTED",
    Encrypted = "ENCRYPTED"
}
/**
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
export declare class GoogleIdentityAccesscontextmanagerV1DevicePolicy extends SpeakeasyBase {
    allowedDeviceManagementLevels?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum[];
    allowedEncryptionStatuses?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum[];
    osConstraints?: GoogleIdentityAccesscontextmanagerV1OsConstraint[];
    requireAdminApproval?: boolean;
    requireCorpOwned?: boolean;
    requireScreenlock?: boolean;
}
