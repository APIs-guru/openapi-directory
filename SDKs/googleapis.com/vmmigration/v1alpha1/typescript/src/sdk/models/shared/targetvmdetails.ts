import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppliedLicense } from "./appliedlicense";
import { ComputeScheduling } from "./computescheduling";
import { NetworkInterface } from "./networkinterface";

export enum TargetVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED"
,    Efi = "EFI"
,    Bios = "BIOS"
}

export enum TargetVmDetailsDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED"
,    Standard = "STANDARD"
,    Balanced = "BALANCED"
,    Ssd = "SSD"
}

export enum TargetVmDetailsLicenseTypeEnum {
    Default = "DEFAULT"
,    Payg = "PAYG"
,    Byol = "BYOL"
}


// TargetVmDetails
/** 
 * TargetVMDetails is a collection of details for creating a VM in a target Compute Engine project.
**/
export class TargetVmDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=appliedLicense" })
  appliedLicense?: AppliedLicense;

  @Metadata({ data: "json, name=bootOption" })
  bootOption?: TargetVmDetailsBootOptionEnum;

  @Metadata({ data: "json, name=computeScheduling" })
  computeScheduling?: ComputeScheduling;

  @Metadata({ data: "json, name=diskType" })
  diskType?: TargetVmDetailsDiskTypeEnum;

  @Metadata({ data: "json, name=externalIp" })
  externalIp?: string;

  @Metadata({ data: "json, name=internalIp" })
  internalIp?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=licenseType" })
  licenseType?: TargetVmDetailsLicenseTypeEnum;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=machineTypeSeries" })
  machineTypeSeries?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

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

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=targetProject" })
  targetProject?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
