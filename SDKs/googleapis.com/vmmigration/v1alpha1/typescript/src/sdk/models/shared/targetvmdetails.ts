import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";


export enum TargetVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}

export enum TargetVmDetailsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    Standard = "STANDARD",
    Balanced = "BALANCED",
    Ssd = "SSD"
}

export enum TargetVmDetailsLicenseTypeEnum {
    Default = "DEFAULT",
    Payg = "PAYG",
    Byol = "BYOL"
}


// TargetVmDetailsInput
/** 
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export class TargetVmDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedLicense" })
  appliedLicense?: AppliedLicense;

  @SpeakeasyMetadata({ data: "json, name=computeScheduling" })
  computeScheduling?: ComputeScheduling;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: TargetVmDetailsDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=licenseType" })
  licenseType?: TargetVmDetailsLicenseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=machineTypeSeries" })
  machineTypeSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=networkInterfaces", elemType: NetworkInterface })
  networkInterfaces?: NetworkInterface[];

  @SpeakeasyMetadata({ data: "json, name=networkTags" })
  networkTags?: string[];

  @SpeakeasyMetadata({ data: "json, name=secureBoot" })
  secureBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProject" })
  targetProject?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}


// TargetVmDetails
/** 
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export class TargetVmDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appliedLicense" })
  appliedLicense?: AppliedLicense;

  @SpeakeasyMetadata({ data: "json, name=bootOption" })
  bootOption?: TargetVmDetailsBootOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=computeScheduling" })
  computeScheduling?: ComputeScheduling;

  @SpeakeasyMetadata({ data: "json, name=diskType" })
  diskType?: TargetVmDetailsDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=licenseType" })
  licenseType?: TargetVmDetailsLicenseTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=machineTypeSeries" })
  machineTypeSeries?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

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

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=targetProject" })
  targetProject?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
