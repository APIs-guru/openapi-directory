import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeAcceleratorConfig } from "./runtimeacceleratorconfig";
import { ContainerImage } from "./containerimage";
import { LocalDisk } from "./localdisk";
import { EncryptionConfig } from "./encryptionconfig";
import { RuntimeShieldedInstanceConfig } from "./runtimeshieldedinstanceconfig";
import { LocalDiskInput } from "./localdisk";
export declare enum VirtualMachineConfigNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}
/**
 * The config settings for virtual machine.
**/
export declare class VirtualMachineConfig extends SpeakeasyBase {
    acceleratorConfig?: RuntimeAcceleratorConfig;
    bootImage?: Map<string, any>;
    containerImages?: ContainerImage[];
    dataDisk?: LocalDisk;
    encryptionConfig?: EncryptionConfig;
    guestAttributes?: Map<string, string>;
    internalIpOnly?: boolean;
    labels?: Map<string, string>;
    machineType?: string;
    metadata?: Map<string, string>;
    network?: string;
    nicType?: VirtualMachineConfigNicTypeEnum;
    reservedIpRange?: string;
    shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;
    subnet?: string;
    tags?: string[];
    zone?: string;
}
/**
 * The config settings for virtual machine.
**/
export declare class VirtualMachineConfigInput extends SpeakeasyBase {
    acceleratorConfig?: RuntimeAcceleratorConfig;
    bootImage?: Map<string, any>;
    containerImages?: ContainerImage[];
    dataDisk?: LocalDiskInput;
    encryptionConfig?: EncryptionConfig;
    internalIpOnly?: boolean;
    labels?: Map<string, string>;
    machineType?: string;
    metadata?: Map<string, string>;
    network?: string;
    nicType?: VirtualMachineConfigNicTypeEnum;
    reservedIpRange?: string;
    shieldedInstanceConfig?: RuntimeShieldedInstanceConfig;
    subnet?: string;
    tags?: string[];
}
