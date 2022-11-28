import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
export declare enum TargetVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
export declare enum TargetVmDetailsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Balanced = "BALANCED",
    Ssd = "SSD"
}
export declare enum TargetVmDetailsLicenseTypeEnum {
    Default = "DEFAULT",
    Payg = "PAYG",
    Byol = "BYOL"
}
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export declare class TargetVmDetailsInput extends SpeakeasyBase {
    appliedLicense?: AppliedLicense;
    computeScheduling?: ComputeScheduling;
    diskType?: TargetVmDetailsDiskTypeEnum;
    externalIp?: string;
    internalIp?: string;
    labels?: Map<string, string>;
    licenseType?: TargetVmDetailsLicenseTypeEnum;
    machineType?: string;
    machineTypeSeries?: string;
    metadata?: Map<string, string>;
    name?: string;
    network?: string;
    networkInterfaces?: NetworkInterface[];
    networkTags?: string[];
    secureBoot?: boolean;
    serviceAccount?: string;
    subnetwork?: string;
    targetProject?: string;
    zone?: string;
}
/**
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export declare class TargetVmDetails extends SpeakeasyBase {
    appliedLicense?: AppliedLicense;
    bootOption?: TargetVmDetailsBootOptionEnum;
    computeScheduling?: ComputeScheduling;
    diskType?: TargetVmDetailsDiskTypeEnum;
    externalIp?: string;
    internalIp?: string;
    labels?: Map<string, string>;
    licenseType?: TargetVmDetailsLicenseTypeEnum;
    machineType?: string;
    machineTypeSeries?: string;
    metadata?: Map<string, string>;
    name?: string;
    network?: string;
    networkInterfaces?: NetworkInterface[];
    networkTags?: string[];
    project?: string;
    secureBoot?: boolean;
    serviceAccount?: string;
    subnetwork?: string;
    targetProject?: string;
    zone?: string;
}
