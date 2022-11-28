import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";


export enum ComputeEngineTargetDetailsBootOptionEnum {
    ComputeEngineBootOptionUnspecified = "COMPUTE_ENGINE_BOOT_OPTION_UNSPECIFIED",
    ComputeEngineBootOptionEfi = "COMPUTE_ENGINE_BOOT_OPTION_EFI",
    ComputeEngineBootOptionBios = "COMPUTE_ENGINE_BOOT_OPTION_BIOS"
}

export enum ComputeEngineTargetDetailsDiskTypeEnum {
    ComputeEngineDiskTypeUnspecified = "COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED",
    ComputeEngineDiskTypeStandard = "COMPUTE_ENGINE_DISK_TYPE_STANDARD",
    ComputeEngineDiskTypeSsd = "COMPUTE_ENGINE_DISK_TYPE_SSD",
    ComputeEngineDiskTypeBalanced = "COMPUTE_ENGINE_DISK_TYPE_BALANCED"
}

export enum ComputeEngineTargetDetailsLicenseTypeEnum {
    ComputeEngineLicenseTypeDefault = "COMPUTE_ENGINE_LICENSE_TYPE_DEFAULT",
    ComputeEngineLicenseTypePayg = "COMPUTE_ENGINE_LICENSE_TYPE_PAYG",
    ComputeEngineLicenseTypeByol = "COMPUTE_ENGINE_LICENSE_TYPE_BYOL"
}


// ComputeEngineTargetDetails
/** 
 * ComputeEngineTargetDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export class ComputeEngineTargetDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalLicenses" })
  additionalLicenses?: string[];

  @SpeakeasyMetadata({ data: "json, name=appliedLicense" })
  appliedLicense?: AppliedLicense;

  @SpeakeasyMetadata({ data: "json, name=bootOption" })
  bootOption?: ComputeEngineTargetDetailsBootOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=computeScheduling" })
  computeScheduling?: ComputeScheduling;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: ComputeEngineTargetDetailsDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=licenseType" })
  licenseType?: ComputeEngineTargetDetailsLicenseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=machineTypeSeries" })
  machineTypeSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=secureBoot" })
  secureBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=vmName" })
  vmName?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
