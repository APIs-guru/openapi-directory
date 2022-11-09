import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleAppsCloudidentityDevicesV1AndroidAttributes } from "./googleappscloudidentitydevicesv1androidattributes";

export enum GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED"
,    Compromised = "COMPROMISED"
,    Uncompromised = "UNCOMPROMISED"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED"
,    Android = "ANDROID"
,    Ios = "IOS"
,    GoogleSync = "GOOGLE_SYNC"
,    Windows = "WINDOWS"
,    MacOs = "MAC_OS"
,    Linux = "LINUX"
,    ChromeOs = "CHROME_OS"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED"
,    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE"
,    Encrypted = "ENCRYPTED"
,    NotEncrypted = "NOT_ENCRYPTED"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED"
,    Approved = "APPROVED"
,    Blocked = "BLOCKED"
,    Pending = "PENDING"
,    Unprovisioned = "UNPROVISIONED"
,    Wiping = "WIPING"
,    Wiped = "WIPED"
}

export enum GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED"
,    Company = "COMPANY"
,    Byod = "BYOD"
}


// GoogleAppsCloudidentityDevicesV1Device
/** 
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export class GoogleAppsCloudidentityDevicesV1Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidSpecificAttributes" })
  androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;

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
  compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deviceId" })
  deviceId?: string;

  @Metadata({ data: "json, name=deviceType" })
  deviceType?: GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum;

  @Metadata({ data: "json, name=enabledDeveloperOptions" })
  enabledDeveloperOptions?: boolean;

  @Metadata({ data: "json, name=enabledUsbDebugging" })
  enabledUsbDebugging?: boolean;

  @Metadata({ data: "json, name=encryptionState" })
  encryptionState?: GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum;

  @Metadata({ data: "json, name=imei" })
  imei?: string;

  @Metadata({ data: "json, name=kernelVersion" })
  kernelVersion?: string;

  @Metadata({ data: "json, name=lastSyncTime" })
  lastSyncTime?: string;

  @Metadata({ data: "json, name=managementState" })
  managementState?: GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum;

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
  ownerType?: GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum;

  @Metadata({ data: "json, name=releaseVersion" })
  releaseVersion?: string;

  @Metadata({ data: "json, name=securityPatchTime" })
  securityPatchTime?: string;

  @Metadata({ data: "json, name=serialNumber" })
  serialNumber?: string;

  @Metadata({ data: "json, name=wifiMacAddresses" })
  wifiMacAddresses?: string[];
}
