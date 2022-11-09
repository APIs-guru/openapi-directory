import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AcceleratorConfig } from "./acceleratorconfig";
import { ContainerImage } from "./containerimage";
import { Disk } from "./disk";
import { ReservationAffinity } from "./reservationaffinity";
import { ShieldedInstanceConfig } from "./shieldedinstanceconfig";
import { UpgradeHistoryEntry } from "./upgradehistoryentry";
import { VmImage } from "./vmimage";

export enum InstanceBootDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED"
,    PdStandard = "PD_STANDARD"
,    PdSsd = "PD_SSD"
,    PdBalanced = "PD_BALANCED"
,    PdExtreme = "PD_EXTREME"
}

export enum InstanceDataDiskTypeEnum {
    DiskTypeUnspecified = "DISK_TYPE_UNSPECIFIED"
,    PdStandard = "PD_STANDARD"
,    PdSsd = "PD_SSD"
,    PdBalanced = "PD_BALANCED"
,    PdExtreme = "PD_EXTREME"
}

export enum InstanceDiskEncryptionEnum {
    DiskEncryptionUnspecified = "DISK_ENCRYPTION_UNSPECIFIED"
,    Gmek = "GMEK"
,    Cmek = "CMEK"
}

export enum InstanceNicTypeEnum {
    UnspecifiedNicType = "UNSPECIFIED_NIC_TYPE"
,    VirtioNet = "VIRTIO_NET"
,    Gvnic = "GVNIC"
}

export enum InstanceStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Starting = "STARTING"
,    Provisioning = "PROVISIONING"
,    Active = "ACTIVE"
,    Stopping = "STOPPING"
,    Stopped = "STOPPED"
,    Deleted = "DELETED"
,    Upgrading = "UPGRADING"
,    Initializing = "INITIALIZING"
,    Registering = "REGISTERING"
,    Suspending = "SUSPENDING"
,    Suspended = "SUSPENDED"
}


// Instance
/** 
 * The definition of a notebook instance.
**/
export class Instance extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: AcceleratorConfig;

  @Metadata({ data: "json, name=bootDiskSizeGb" })
  bootDiskSizeGb?: string;

  @Metadata({ data: "json, name=bootDiskType" })
  bootDiskType?: InstanceBootDiskTypeEnum;

  @Metadata({ data: "json, name=canIpForward" })
  canIpForward?: boolean;

  @Metadata({ data: "json, name=containerImage" })
  containerImage?: ContainerImage;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=customGpuDriverPath" })
  customGpuDriverPath?: string;

  @Metadata({ data: "json, name=dataDiskSizeGb" })
  dataDiskSizeGb?: string;

  @Metadata({ data: "json, name=dataDiskType" })
  dataDiskType?: InstanceDataDiskTypeEnum;

  @Metadata({ data: "json, name=diskEncryption" })
  diskEncryption?: InstanceDiskEncryptionEnum;

  @Metadata({ data: "json, name=disks", elemType: shared.Disk })
  disks?: Disk[];

  @Metadata({ data: "json, name=installGpuDriver" })
  installGpuDriver?: boolean;

  @Metadata({ data: "json, name=instanceOwners" })
  instanceOwners?: string[];

  @Metadata({ data: "json, name=kmsKey" })
  kmsKey?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=nicType" })
  nicType?: InstanceNicTypeEnum;

  @Metadata({ data: "json, name=noProxyAccess" })
  noProxyAccess?: boolean;

  @Metadata({ data: "json, name=noPublicIp" })
  noPublicIp?: boolean;

  @Metadata({ data: "json, name=noRemoveDataDisk" })
  noRemoveDataDisk?: boolean;

  @Metadata({ data: "json, name=postStartupScript" })
  postStartupScript?: string;

  @Metadata({ data: "json, name=proxyUri" })
  proxyUri?: string;

  @Metadata({ data: "json, name=reservationAffinity" })
  reservationAffinity?: ReservationAffinity;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=serviceAccountScopes" })
  serviceAccountScopes?: string[];

  @Metadata({ data: "json, name=shieldedInstanceConfig" })
  shieldedInstanceConfig?: ShieldedInstanceConfig;

  @Metadata({ data: "json, name=state" })
  state?: InstanceStateEnum;

  @Metadata({ data: "json, name=subnet" })
  subnet?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upgradeHistory", elemType: shared.UpgradeHistoryEntry })
  upgradeHistory?: UpgradeHistoryEntry[];

  @Metadata({ data: "json, name=vmImage" })
  vmImage?: VmImage;
}
