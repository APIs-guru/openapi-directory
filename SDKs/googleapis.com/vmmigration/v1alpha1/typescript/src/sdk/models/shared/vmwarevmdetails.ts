import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VmwareVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED"
,    Efi = "EFI"
,    Bios = "BIOS"
}

export enum VmwareVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED"
,    On = "ON"
,    Off = "OFF"
,    Suspended = "SUSPENDED"
}


// VmwareVmDetails
/** 
 * VmwareVmDetails describes a VM in vCenter.
**/
export class VmwareVmDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=bootOption" })
  bootOption?: VmwareVmDetailsBootOptionEnum;

  @Metadata({ data: "json, name=committedStorage" })
  committedStorage?: string;

  @Metadata({ data: "json, name=committedStorageMb" })
  committedStorageMb?: string;

  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=datacenterDescription" })
  datacenterDescription?: string;

  @Metadata({ data: "json, name=datacenterId" })
  datacenterId?: string;

  @Metadata({ data: "json, name=diskCount" })
  diskCount?: number;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=guestDescription" })
  guestDescription?: string;

  @Metadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @Metadata({ data: "json, name=powerState" })
  powerState?: VmwareVmDetailsPowerStateEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=vmId" })
  vmId?: string;
}
