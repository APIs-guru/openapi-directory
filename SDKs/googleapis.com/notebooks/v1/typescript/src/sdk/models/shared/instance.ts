import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AcceleratorConfig } from "./acceleratorconfig";
import { ContainerImage } from "./containerimage";
import { Disk } from "./disk";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeHistoryEntry } from "./upgradehistoryentry";
import { VmImage } from "./vmimage";


export enum InstanceBootDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}

export enum InstanceDataDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED",
    PdStandard = "PD_STANDARD",
    PdSsd = "PD_SSD",
    PdBalanced = "PD_BALANCED",
    PdExtreme = "PD_EXTREME"
}

export enum InstanceDiskEncryptionEnum {
    DiskEncryptionUnspecified = "DISK_ENCRYPTION_UNSPECIFIED",
    Gmek = "GMEK",
    Cmek = "CMEK"
}

export enum InstanceNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE",
    VirtioNet = "VIRTIO_NET",
    Gvnic = "GVNIC"
}

export enum InstanceStateEnum {
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


// Instance
/** 
 * The definition of a notebook instance.
**/
export class Instance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: AcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=bootDiskType" })
  bootDiskType?: InstanceBootDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskType" })
  dataDiskType?: InstanceDataDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=diskEncryption" })
  diskEncryption?: InstanceDiskEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: Disk })
  disks?: Disk[];

  @SpeakeasyMetadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceOwners" })
  instanceOwners?: string[];

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=nicType" })
  nicType?: InstanceNicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=noProxyAccess" })
  noProxyAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noPublicIp" })
  noPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noRemoveDataDisk" })
  noRemoveDataDisk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=proxyUri" })
  proxyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountScopes" })
  serviceAccountScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upgradeHistory", elemType: UpgradeHistoryEntry })
  upgradeHistory?: UpgradeHistoryEntry[];

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}


// InstanceInput
/** 
 * The definition of a notebook instance.
**/
export class InstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: AcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=bootDiskType" })
  bootDiskType?: InstanceBootDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @SpeakeasyMetadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @SpeakeasyMetadata({ data: "json, name=dataDiskType" })
  dataDiskType?: InstanceDataDiskTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=diskEncryption" })
  diskEncryption?: InstanceDiskEncryptionEnum;

  @SpeakeasyMetadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @SpeakeasyMetadata({ data: "json, name=instanceOwners" })
  instanceOwners?: string[];

  @SpeakeasyMetadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=nicType" })
  nicType?: InstanceNicTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=noProxyAccess" })
  noProxyAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noPublicIp" })
  noPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=noRemoveDataDisk" })
  noRemoveDataDisk?: boolean;

  @SpeakeasyMetadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @SpeakeasyMetadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountScopes" })
  serviceAccountScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @SpeakeasyMetadata({ data: "json, name=subnet" })
  subnet?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=upgradeHistory", elemType: UpgradeHistoryEntry })
  upgradeHistory?: UpgradeHistoryEntry[];

  @SpeakeasyMetadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}
