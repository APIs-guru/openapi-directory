import { SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";
export declare enum ComputeEngineTargetDetailsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI",
    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}
export declare enum ComputeEngineTargetDetailsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD",
    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD",
    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}
export declare enum ComputeEngineTargetDetailsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG",
    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}
/**
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export declare class ComputeEngineTargetDetails extends SpeakeasyBase {
    additionalLicenses?: string[];
    appliedLicense?: AppliedLicense;
    bootOption?: ComputeEngineTargetDetailsBootOptionEnum;
    computeScheduling?: ComputeScheduling;
    diskType?: ComputeEngineTargetDetailsDiskTypeEnum;
    hostname?: string;
    labels?: Map<string, string>;
    licenseType?: ComputeEngineTargetDetailsLicenseTypeEnum;
    machineType?: string;
    machineTypeSeries?: string;
    metadata?: Map<string, string>;
    networkInterfaces?: NetworkInterface[];
    networkTags?: string[];
    project?: string;
    secureBoot?: boolean;
    serviceAccount?: string;
    vmName?: string;
    zone?: string;
}
