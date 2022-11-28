import { SpeakeasyBase } from "../../../internal/utils";
import { AwsSecurityGroup } from "./awssecuritygroup";
export declare enum AwsVmDetailsArchitectureEnum {
    VmArchitectureUnspecified = "VM_ARCHITECTURE_UNSPECIFIED",
    I386 = "I386",
    X8664 = "X86_64",
    Arm64 = "ARM64",
    X8664Mac = "X86_64_MAC"
}
export declare enum AwsVmDetailsBootOptionEnum {
    BootOptionUnspecified = "BOOT_OPTION_UNSPECIFIED",
    Efi = "EFI",
    Bios = "BIOS"
}
export declare enum AwsVmDetailsPowerStateEnum {
    PowerStateUnspecified = "POWER_STATE_UNSPECIFIED",
    On = "ON",
    Off = "OFF",
    Suspended = "SUSPENDED",
    Pending = "PENDING"
}
export declare enum AwsVmDetailsVirtualizationTypeEnum {
    VmVirtualizationTypeUnspecified = "VM_VIRTUALIZATION_TYPE_UNSPECIFIED",
    Hvm = "HVM",
    Paravirtual = "PARAVIRTUAL"
}
/**
 * AwsVmDetails describes a VM in AWS.
**/
export declare class AwsVmDetails extends SpeakeasyBase {
    architecture?: AwsVmDetailsArchitectureEnum;
    bootOption?: AwsVmDetailsBootOptionEnum;
    committedStorageMb?: string;
    cpuCount?: number;
    diskCount?: number;
    displayName?: string;
    instanceType?: string;
    memoryMb?: number;
    osDescription?: string;
    powerState?: AwsVmDetailsPowerStateEnum;
    securityGroups?: AwsSecurityGroup[];
    sourceDescription?: string;
    sourceId?: string;
    tags?: Map<string, string>;
    virtualizationType?: AwsVmDetailsVirtualizationTypeEnum;
    vmId?: string;
    vpcId?: string;
    zone?: string;
}
