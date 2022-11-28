import { SpeakeasyBase } from "../../../internal/utils";
import { AndroidAttributes } from "./androidattributes";
import { EndpointVerificationSpecificAttributes } from "./endpointverificationspecificattributes";
export declare enum DeviceClientTypesEnum {
    ClientTypeUnspecified = "CLIENT_TYPE_UNSPECIFIED",
    DriveFs = "DRIVE_FS",
    Fundamental = "FUNDAMENTAL",
    EndpointVerification = "ENDPOINT_VERIFICATION",
    WindowsAdvanced = "WINDOWS_ADVANCED",
    GoogleCredentialsProviderForWindows = "GOOGLE_CREDENTIALS_PROVIDER_FOR_WINDOWS"
}
export declare enum DeviceCompromisedStateEnum {
    CompromisedStateUnspecified = "COMPROMISED_STATE_UNSPECIFIED",
    Compromised = "COMPROMISED",
    Uncompromised = "UNCOMPROMISED"
}
export declare enum DeviceDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    GoogleSync = "GOOGLE_SYNC",
    Windows = "WINDOWS",
    MacOs = "MAC_OS",
    Linux = "LINUX",
    ChromeOs = "CHROME_OS"
}
export declare enum DeviceEncryptionStateEnum {
    EncryptionStateUnspecified = "ENCRYPTION_STATE_UNSPECIFIED",
    UnsupportedByDevice = "UNSUPPORTED_BY_DEVICE",
    Encrypted = "ENCRYPTED",
    NotEncrypted = "NOT_ENCRYPTED"
}
export declare enum DeviceManagementStateEnum {
    ManagementStateUnspecified = "MANAGEMENT_STATE_UNSPECIFIED",
    Approved = "APPROVED",
    Blocked = "BLOCKED",
    Pending = "PENDING",
    Unprovisioned = "UNPROVISIONED",
    Wiping = "WIPING",
    Wiped = "WIPED"
}
export declare enum DeviceOwnerTypeEnum {
    DeviceOwnershipUnspecified = "DEVICE_OWNERSHIP_UNSPECIFIED",
    Company = "COMPANY",
    Byod = "BYOD"
}
/**
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export declare class Device extends SpeakeasyBase {
    androidSpecificAttributes?: AndroidAttributes;
    assetTag?: string;
    basebandVersion?: string;
    bootloaderVersion?: string;
    brand?: string;
    buildNumber?: string;
    clientTypes?: DeviceClientTypesEnum[];
    compromisedState?: DeviceCompromisedStateEnum;
    createTime?: string;
    deviceId?: string;
    deviceType?: DeviceDeviceTypeEnum;
    enabledDeveloperOptions?: boolean;
    enabledUsbDebugging?: boolean;
    encryptionState?: DeviceEncryptionStateEnum;
    endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;
    hostname?: string;
    imei?: string;
    kernelVersion?: string;
    lastSyncTime?: string;
    managementState?: DeviceManagementStateEnum;
    manufacturer?: string;
    meid?: string;
    model?: string;
    name?: string;
    networkOperator?: string;
    osVersion?: string;
    otherAccounts?: string[];
    ownerType?: DeviceOwnerTypeEnum;
    releaseVersion?: string;
    securityPatchTime?: string;
    serialNumber?: string;
    wifiMacAddresses?: string[];
}
/**
 * A Device within the Cloud Identity Devices API. Represents a Device known to Google Cloud, independent of the device ownership, type, and whether it is assigned or in use by a user.
**/
export declare class DeviceInput extends SpeakeasyBase {
    androidSpecificAttributes?: AndroidAttributes;
    assetTag?: string;
    clientTypes?: DeviceClientTypesEnum[];
    deviceId?: string;
    endpointVerificationSpecificAttributes?: EndpointVerificationSpecificAttributes;
    hostname?: string;
    lastSyncTime?: string;
    serialNumber?: string;
    wifiMacAddresses?: string[];
}
