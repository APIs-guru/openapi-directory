import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AndroidAttributes } from "./androidattributes";
import { EndpointVerificationSpecificAttributes } from "./endpointverificationspecificattributes";


export enum DeviceClientTypesEnum {
    ClientTypeUnspecified = "CLIENT_TYPE_UNSPECIFIED",
    DriveFs = "DRIVE_FS",
    Fundamental = "FUNDAMENTAL",
    EndpointVerification = "ENDPOINT_VERIFICATION",
    WindowsAdvanced = "WINDOWS_ADVANCED",
    GoogleCredentialsProviderForWindows = "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS"
}

export enum DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    Uncompromised = "UNCOMPROMISED"
}

export enum DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    GoogleSync = "GOOGLE_SYNC",
    Windows = "WINDOWS",
    MacOs = "MAC_OS",
    Linux = "LINUX",
    ChromeOs = "CHROME_OS"
}

export enum DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED",
    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE",
    Encrypted = "ENCRYPTED",
    NotEncrypted = "NOT_ENCRYPTED"
}

export enum DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    Pending = "PENDING",
    Unprovisioned = "UNPROVISIONED",
    Wiping = "WIPING",
    Wiped = "WIPED"
}

export enum DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED",
    Company = "COMPANY",
    Byod = "BYOD"
}


// Device
/** 
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidSpecificAttributes" })
  androidSpecificAttributes?: AndroidAttributes;

  @SpeakeasyMetadata({ data: "json, name=assetTag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=basebandVersion" })
  basebandVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=bootloaderVersion" })
  bootloaderVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=brand" })
  brand?: string;

  @SpeakeasyMetadata({ data: "json, name=buildNumber" })
  buildNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=clientTypes" })
  clientTypes?: DeviceClientTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=compromisedState" })
  compromisedState?: DeviceCompromisedStateEnum;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceType" })
  deviceType?: DeviceDeviceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=enabledDeveloperOptions" })
  enabledDeveloperOptions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabledUsbDebugging" })
  enabledUsbDebugging?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionState" })
  encryptionState?: DeviceEncryptionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=endpointVerificationSpecificAttributes" })
  endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=imei" })
  imei?: string;

  @SpeakeasyMetadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=managementState" })
  managementState?: DeviceManagementStateEnum;

  @SpeakeasyMetadata({ data: "json, name=manufacturer" })
  manufacturer?: string;

  @SpeakeasyMetadata({ data: "json, name=meid" })
  meid?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=networkOperator" })
  networkOperator?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=otherAccounts" })
  otherAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=ownerType" })
  ownerType?: DeviceOwnerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=securityPatchTime" })
  securityPatchTime?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMacAddresses" })
  wifiMacAddresses?: string[];
}


// DeviceInput
/** 
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export class DeviceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidSpecificAttributes" })
  androidSpecificAttributes?: AndroidAttributes;

  @SpeakeasyMetadata({ data: "json, name=assetTag" })
  assetTag?: string;

  @SpeakeasyMetadata({ data: "json, name=clientTypes" })
  clientTypes?: DeviceClientTypesEnum[];

  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=endpointVerificationSpecificAttributes" })
  endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @SpeakeasyMetadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=wifiMacAddresses" })
  wifiMacAddresses?: string[];
}
