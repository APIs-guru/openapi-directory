import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleIdentityAccesscontextmanagerV1OsConstraint } from "./googleidentityaccesscontextmanagerv1osconstraint";


export enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum {
    ManagementUnspecified = "MANAGEMENT_UNSPECIFIED",
    None = "NONE",
    Basic = "BASIC",
    Complete = "COMPLETE"
}

export enum GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum {
    EncryptionUnspecified = "ENCRYPTION_UNSPECIFIED",
    EncryptionUnsupported = "ENCRYPTION_UNSUPPORTED",
    Unencrypted = "UNENCRYPTED",
    Encrypted = "ENCRYPTED"
}


// GoogleIdentityAccesscontextmanagerV1DevicePolicy
/** 
 * `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
**/
export class GoogleIdentityAccesscontextmanagerV1DevicePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowedDeviceManagementLevels" })
  allowedDeviceManagementLevels?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedDeviceManagementLevelsEnum[];

  @SpeakeasyMetadata({ data: "json, name=allowedEncryptionStatuses" })
  allowedEncryptionStatuses?: GoogleIdentityAccesscontextmanagerV1DevicePolicyAllowedEncryptionStatusesEnum[];

  @SpeakeasyMetadata({ data: "json, name=osConstraints", elemType: GoogleIdentityAccesscontextmanagerV1OsConstraint })
  osConstraints?: GoogleIdentityAccesscontextmanagerV1OsConstraint[];

  @SpeakeasyMetadata({ data: "json, name=requireAdminApproval" })
  requireAdminApproval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireCorpOwned" })
  requireCorpOwned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requireScreenlock" })
  requireScreenlock?: boolean;
}
