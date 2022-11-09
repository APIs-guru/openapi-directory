import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespacedName } from "./namespacedname";

export enum VolumeRestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Restoring = "RESTORING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Deleting = "DELETING"
}

export enum VolumeRestoreVolumeTypeEnum {
    VolumeTypeUnspecified = "VOLUME_TYPE_UNSPECIFIED"
,    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}


// VolumeRestore
/** 
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
**/
export class VolumeRestore extends SpeakeasyBase {
  @Metadata({ data: "json, name=completeTime" })
  completeTime?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: VolumeRestoreStateEnum;

  @Metadata({ data: "json, name=stateMessage" })
  stateMessage?: string;

  @Metadata({ data: "json, name=targetPvc" })
  targetPvc?: NamespacedName;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=volumeBackup" })
  volumeBackup?: string;

  @Metadata({ data: "json, name=volumeHandle" })
  volumeHandle?: string;

  @Metadata({ data: "json, name=volumeType" })
  volumeType?: VolumeRestoreVolumeTypeEnum;
}
