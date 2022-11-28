import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";


export enum VolumeRestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Restoring = "RESTORING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}

export enum VolumeRestoreVolumeTypeEnum {
    VolumeTypeUnspecified = "VOLUME_TYPE_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}


// VolumeRestore
/** 
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
**/
export class VolumeRestore extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VolumeRestoreStateEnum;

  @SpeakeasyMetadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=targetPvc" })
  targetPvc?: NamespacedName;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeBackup" })
  volumeBackup?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeHandle" })
  volumeHandle?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeType" })
  volumeType?: VolumeRestoreVolumeTypeEnum;
}
