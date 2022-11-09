import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespacedName } from "./namespacedname";

export enum VolumeBackupFormatEnum {
    VolumeBackupFormatUnspecified = "VOLUME_BACKUP_FORMAT_UNSPECIFIED"
,    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}

export enum VolumeBackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Snapshotting = "SNAPSHOTTING"
,    Uploading = "UPLOADING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}


// VolumeBackup
/** 
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
**/
export class VolumeBackup extends SpeakeasyBase {
  @Metadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=diskSizeBytes" })
  diskSizeBytes?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=format" })
  format?: VolumeBackupFormatEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sourcePvc" })
  sourcePvc?: NamespacedName;

  @Metadata({ data: "json, name=state" })
  state?: VolumeBackupStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=storageBytes" })
  storageBytes?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumeBackupHandle" })
  volumeBackupHandle?: string;
}
