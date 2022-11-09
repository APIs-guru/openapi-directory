import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespacedName } from "./namespacedname";
export declare enum VolumeBackupFormatEnum {
    VolumeBackupFormatUnspecified = "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}
export declare enum VolumeBackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Snapshotting = "SNAPSHOTTING",
    Uploading = "UPLOADING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
**/
export declare class VolumeBackup extends SpeakeasyBase {
    completeTime?: string;
    createTime?: string;
    diskSizeBytes?: string;
    etag?: string;
    format?: VolumeBackupFormatEnum;
    name?: string;
    sourcePvc?: NamespacedName;
    state?: VolumeBackupStateEnum;
    stateMessage?: string;
    storageBytes?: string;
    uid?: string;
    updateTime?: string;
    volumeBackupHandle?: string;
}
