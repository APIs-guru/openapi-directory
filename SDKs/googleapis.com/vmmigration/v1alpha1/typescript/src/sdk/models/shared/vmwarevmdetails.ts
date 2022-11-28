import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VmwareVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}

export enum VmwareVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED"
}


// VmwareVmDetails
/** 
 * VmwareVmDetails describes a VM in vCenter.
**/
export class VmwareVmDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bootOption" })
  bootOption?: VmwareVmDetailsBootOptionEnum;

  @SpeakeasyMetadata({ data: "json, name=committedStorage" })
  committedStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=committedStorageMb" })
  committedStorageMb?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=datacenterDescription" })
  datacenterDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=datacenterId" })
  datacenterId?: string;

  @SpeakeasyMetadata({ data: "json, name=diskCount" })
  diskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=guestDescription" })
  guestDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=powerState" })
  powerState?: VmwareVmDetailsPowerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}


// VmwareVmDetailsInput
/** 
 * VmwareVmDetails describes a VM in vCenter.
**/
export class VmwareVmDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committedStorage" })
  committedStorage?: string;

  @SpeakeasyMetadata({ data: "json, name=committedStorageMb" })
  committedStorageMb?: string;

  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=datacenterDescription" })
  datacenterDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=datacenterId" })
  datacenterId?: string;

  @SpeakeasyMetadata({ data: "json, name=diskCount" })
  diskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=guestDescription" })
  guestDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=memoryMb" })
  memoryMb?: number;

  @SpeakeasyMetadata({ data: "json, name=powerState" })
  powerState?: VmwareVmDetailsPowerStateEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;
}
