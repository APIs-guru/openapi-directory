import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAppsCloudidentityDevicesV1AndroidAttributes } from "./googleappscloudidentitydevicesv1androidattributes";
export declare enum GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    Uncompromised = "UNCOMPROMISED"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    GoogleSync = "GOOGLE_SYNC",
    Windows = "WINDOWS",
    MacOs = "MAC_OS",
    Linux = "LINUX",
    ChromeOs = "CHROME_OS"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED",
    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE",
    Encrypted = "ENCRYPTED",
    NotEncrypted = "NOT_ENCRYPTED"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    Pending = "PENDING",
    Unprovisioned = "UNPROVISIONED",
    Wiping = "WIPING",
    Wiped = "WIPED"
}
export declare enum GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED",
    Company = "COMPANY",
    Byod = "BYOD"
}
/**
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export declare class GoogleAppsCloudidentityDevicesV1DeviceInput extends SpeakeasyBase {
    androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    assetTag?: string;
    deviceId?: string;
    lastSyncTime?: string;
    serialNumber?: string;
    wifiMacAddresses?: string[];
}
/**
 *  A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export declare class GoogleAppsCloudidentityDevicesV1Device extends SpeakeasyBase {
    androidSpecificAttributes?: GoogleAppsCloudidentityDevicesV1AndroidAttributes;
    assetTag?: string;
    basebandVersion?: string;
    bootloaderVersion?: string;
    brand?: string;
    buildNumber?: string;
    compromisedState?: GoogleAppsCloudidentityDevicesV1DeviceCompromisedStateEnum;
    createTime?: string;
    deviceId?: string;
    deviceType?: GoogleAppsCloudidentityDevicesV1DeviceDeviceTypeEnum;
    enabledDeveloperOptions?: boolean;
    enabledUsbDebugging?: boolean;
    encryptionState?: GoogleAppsCloudidentityDevicesV1DeviceEncryptionStateEnum;
    imei?: string;
    kernelVersion?: string;
    lastSyncTime?: string;
    managementState?: GoogleAppsCloudidentityDevicesV1DeviceManagementStateEnum;
    manufacturer?: string;
    meid?: string;
    model?: string;
    name?: string;
    networkOperator?: string;
    osVersion?: string;
    otherAccounts?: string[];
    ownerType?: GoogleAppsCloudidentityDevicesV1DeviceOwnerTypeEnum;
    releaseVersion?: string;
    securityPatchTime?: string;
    serialNumber?: string;
    wifiMacAddresses?: string[];
}
