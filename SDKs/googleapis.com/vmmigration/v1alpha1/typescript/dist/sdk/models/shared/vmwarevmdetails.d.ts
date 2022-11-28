import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VmwareVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
export declare enum VmwareVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED"
}
/**
 * VmwareVmDetails describes a VM in vCenter.
**/
export declare class VmwareVmDetails extends SpeakeasyBase {
    bootOption?: VmwareVmDetailsBootOptionEnum;
    committedStorage?: string;
    committedStorageMb?: string;
    cpuCount?: number;
    datacenterDescription?: string;
    datacenterId?: string;
    diskCount?: number;
    displayName?: string;
    guestDescription?: string;
    memoryMb?: number;
    powerState?: VmwareVmDetailsPowerStateEnum;
    uuid?: string;
    vmId?: string;
}
/**
 * VmwareVmDetails describes a VM in vCenter.
**/
export declare class VmwareVmDetailsInput extends SpeakeasyBase {
    committedStorage?: string;
    committedStorageMb?: string;
    cpuCount?: number;
    datacenterDescription?: string;
    datacenterId?: string;
    diskCount?: number;
    displayName?: string;
    guestDescription?: string;
    memoryMb?: number;
    powerState?: VmwareVmDetailsPowerStateEnum;
    uuid?: string;
    vmId?: string;
}
