import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AndroidAttributes } from "./androidattributes";
import { EndpointVerificationSpecificAttributes } from "./endpointverificationspecificattributes";

export enum DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED"
,    Compromised = "COMPROMISED"
,    Uncompromised = "UNCOMPROMISED"
}

export enum DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED"
,    Android = "ANDROID"
,    Ios = "IOS"
,    GoogleSync = "GOOGLE_SYNC"
,    Windows = "WINDOWS"
,    MacOs = "MAC_OS"
,    Linux = "LINUX"
,    ChromeOs = "CHROME_OS"
}

export enum DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED"
,    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE"
,    Encrypted = "ENCRYPTED"
,    NotEncrypted = "NOT_ENCRYPTED"
}

export enum DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED"
,    Approved = "APPROVED"
,    Blocked = "BLOCKED"
,    Pending = "PENDING"
,    Unprovisioned = "UNPROVISIONED"
,    Wiping = "WIPING"
,    Wiped = "WIPED"
}

export enum DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED"
,    Company = "COMPANY"
,    Byod = "BYOD"
}


// Device
/** 
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidSpecificAttributes" })
  androidSpecificAttributes?: AndroidAttributes;

  @Metadata({ data: "json, name=assetTag" })
  assetTag?: string;

  @Metadata({ data: "json, name=basebandVersion" })
  basebandVersion?: string;

  @Metadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @Metadata({ data: "json, name=brand" })
  brand?: string;

  @Metadata({ data: "json, name=buildNumber" })
  buildNumber?: string;

  @Metadata({ data: "json, name=compromisedState" })
  compromisedState?: DeviceCompromisedStateEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: DeviceDeviceTypeEnum;

  @Metadata({ data: "json, name=enabledDeveloperOptions" })
  enabledDeveloperOptions?: boolean;

  @Metadata({ data: "json, name=enabledUsbDebugging" })
  enabledUsbDebugging?: boolean;

  @Metadata({ data: "json, name=encryptionState" })
  encryptionState?: DeviceEncryptionStateEnum;

  @Metadata({ data: "json, name=endpointVerificationSpecificAttributes" })
  endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;

  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @Metadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @Metadata({ data: "json, name=managementState" })
  managementState?: DeviceManagementStateEnum;

  @Metadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @Metadata({ data: "json, name=meid" })
  meid?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=networkOperator" })
  networkOperator?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=otherAccounts" })
  otherAccounts?: string[];

  @Metadata({ data: "json, name=ownerType" })
  ownerType?: DeviceOwnerTypeEnum;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=securityPatchTime" })
  securityPatchTime?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=wifiMacAddresses" })
  wifiMacAddresses?: string[];
}
