import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";

export enum ComputeEngineTargetDetailsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED"
,    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI"
,    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}

export enum ComputeEngineTargetDetailsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"
,    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD"
,    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD"
,    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}

export enum ComputeEngineTargetDetailsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT"
,    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG"
,    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}


// ComputeEngineTargetDetails
/** 
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export class ComputeEngineTargetDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalLicenses" })
  additionalLicenses?: string[];

  @Metadata({ data: "json, name=appliedLicense" })
  appliedLicense?: AppliedLicense;

  @Metadata({ data: "json, name=bootOption" })
  bootOption?: ComputeEngineTargetDetailsBootOptionEnum;

  @Metadata({ data: "json, name=computeScheduling" })
  computeScheduling?: ComputeScheduling;

  @Metadata({ data: "json, name=diskType" })
  diskType?: ComputeEngineTargetDetailsDiskTypeEnum;

  @Metadata({ data: "json, name=hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=licenseType" })
  licenseType?: ComputeEngineTargetDetailsLicenseTypeEnum;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=machineTypeSeries" })
  machineTypeSeries?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=networkInterfaces", elemType: shared.NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @Metadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=secureBoot" })
  secureBoot?: boolean;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=vmName" })
  vmName?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
