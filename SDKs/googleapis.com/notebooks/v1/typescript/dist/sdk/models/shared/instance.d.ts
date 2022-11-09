import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { ContainerImage } from "./containerimage";
import { Disk } from "./disk";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeHistoryEntry } from "./upgradehistoryentry";
import { VmImage } from "./vmimage";
export declare enum InstanceBootDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}
export declare enum InstanceDataDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}
export declare enum InstanceDiskEncryptionEnum {
    DiskEncryptionUnspecified = "DISK_ENCRYPTION_UNSPECIFIED",
    Gmek = "GMEK",
    Cmek = "CMEK"
}
export declare enum InstanceNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}
export declare enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Starting = "STARTING",
    Provisioning = "PROVISIONING",
    Active = "ACTIVE",
    Stopping = "STOPPING",
    Stopped = "STOPPED",
    Deleted = "DELETED",
    Upgrading = "UPGRADING",
    Initializing = "INITIALIZING",
    Registering = "REGISTERING",
    Suspending = "SUSPENDING",
    Suspended = "SUSPENDED"
}
/**
 * The definition of a notebook instance.
**/
export declare class Instance extends SpeakeasyBase {
    acceleratorConfig?: AcceleratorConfig;
    bootDiskSizeGb?: string;
    bootDiskType?: InstanceBootDiskTypeEnum;
    canIpForward?: boolean;
    containerImage?: ContainerImage;
    createTime?: string;
    creator?: string;
    customGpuDriverPath?: string;
    dataDiskSizeGb?: string;
    dataDiskType?: InstanceDataDiskTypeEnum;
    diskEncryption?: InstanceDiskEncryptionEnum;
    disks?: Disk[];
    installGpuDriver?: boolean;
    instanceOwners?: string[];
    kmsKey?: string;
    labels?: Map<string, string>;
    machineType?: string;
    metadata?: Map<string, string>;
    name?: string;
    network?: string;
    nicType?: InstanceNicTypeEnum;
    noProxyAccess?: boolean;
    noPublicIp?: boolean;
    noRemoveDataDisk?: boolean;
    postStartupScript?: string;
    proxyUri?: string;
    reservationAffinity?: ReservationAffinity;
    serviceAccount?: string;
    serviceAccountScopes?: string[];
    shieldedInstanceConfig?: ShieldedInstanceConfig;
    state?: InstanceStateEnum;
    subnet?: string;
    tags?: string[];
    updateTime?: string;
    upgradeHistory?: UpgradeHistoryEntry[];
    vmImage?: VmImage;
}
