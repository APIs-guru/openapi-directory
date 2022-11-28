import { SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";
export declare enum VolumeRestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Restoring = "RESTORING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
export declare enum VolumeRestoreVolumeTypeEnum {
    VolumeTypeUnspecified = "VOLUME_TYPE_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}
/**
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
**/
export declare class VolumeRestore extends SpeakeasyBase {
    completeTime?: string;
    createTime?: string;
    etag?: string;
    name?: string;
    state?: VolumeRestoreStateEnum;
    stateMessage?: string;
    targetPvc?: NamespacedName;
    uid?: string;
    updateTime?: string;
    volumeBackup?: string;
    volumeHandle?: string;
    volumeType?: VolumeRestoreVolumeTypeEnum;
}
