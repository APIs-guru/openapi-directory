import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
export declare enum ComputeEngineTargetDefaultsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI",
    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}
export declare enum ComputeEngineTargetDefaultsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD",
    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD",
    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}
export declare enum ComputeEngineTargetDefaultsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG",
    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
export declare class ComputeEngineTargetDefaults extends SpeakeasyBase {
    additionalLicenses?: string[];
    appliedLicense?: AppliedLicense;
    bootOption?: ComputeEngineTargetDefaultsBootOptionEnum;
    computeScheduling?: ComputeScheduling;
    diskType?: ComputeEngineTargetDefaultsDiskTypeEnum;
    hostname?: string;
    labels?: Map<string, string>;
    licenseType?: ComputeEngineTargetDefaultsLicenseTypeEnum;
    machineType?: string;
    machineTypeSeries?: string;
    metadata?: Map<string, string>;
    networkInterfaces?: NetworkInterface[];
    networkTags?: string[];
    secureBoot?: boolean;
    serviceAccount?: string;
    targetProject?: string;
    vmName?: string;
    zone?: string;
}
/**
 * ComputeEngineTargetDefaults is a collection of details for creating a VM in a target Compute Engine project.
**/
export declare class ComputeEngineTargetDefaultsInput extends SpeakeasyBase {
    additionalLicenses?: string[];
    appliedLicense?: AppliedLicense;
    computeScheduling?: ComputeScheduling;
    diskType?: ComputeEngineTargetDefaultsDiskTypeEnum;
    hostname?: string;
    labels?: Map<string, string>;
    licenseType?: ComputeEngineTargetDefaultsLicenseTypeEnum;
    machineType?: string;
    machineTypeSeries?: string;
    metadata?: Map<string, string>;
    networkInterfaces?: NetworkInterface[];
    networkTags?: string[];
    secureBoot?: boolean;
    serviceAccount?: string;
    targetProject?: string;
    vmName?: string;
    zone?: string;
}
