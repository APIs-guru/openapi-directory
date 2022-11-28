import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityGroup } from "./awssecuritygroup";


export enum AwsVmDetailsArchitectureEnum {
    VmArchitectureUnspecified = "VM_ARCHITECTURE_UNSPECIFIED",
    I386 = "I386",
    X8664 = "X86_64",
    Arm64 = "ARM64",
    X8664Mac = "X86_64_MAC"
}

export enum AwsVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}

export enum AwsVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED",
    Pending = "PENDING"
}

export enum AwsVmDetailsVirtualizationTypeEnum {
    VmVirtualizationTypeUnspecified = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
    Hvm = "HVM",
    Paravirtual = "PARAVIRTUAL"
}


// AwsVmDetails
/** 
 * AwsVmDetails describes a VM in AWS.
**/
export class AwsVmDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: AwsVmDetailsArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=bootOption" })
  bootOption?: AwsVmDetailsBootOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=committedStorageMb" })
  committedStorageMb?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=diskCount" })
  diskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=osDescription" })
  osDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=powerState" })
  powerState?: AwsVmDetailsPowerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=securityGroups", elemType: AwsSecurityGroup })
  securityGroups?: AwsSecurityGroup[];

  @SpeakeasyMetadata({ data: "json, name=sourceDescription" })
  sourceDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceId" })
  sourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=virtualizationType" })
  virtualizationType?: AwsVmDetailsVirtualizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=vpcId" })
  vpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
