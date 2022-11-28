import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";


export enum VolumeBackupFormatEnum {
    VolumeBackupFormatUnspecified = "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}

export enum VolumeBackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Snapshotting = "SNAPSHOTTING",
    Uploading = "UPLOADING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}


// VolumeBackup
/** 
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
**/
export class VolumeBackup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=diskSizeBytes" })
  diskSizeBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: VolumeBackupFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sourcePvc" })
  sourcePvc?: NamespacedName;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VolumeBackupStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=storageBytes" })
  storageBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeBackupHandle" })
  volumeBackupHandle?: string;
}
