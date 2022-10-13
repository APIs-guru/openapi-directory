package shared

type VolumeRestoreStateEnum string

const (
	VolumeRestoreStateEnumStateUnspecified VolumeRestoreStateEnum = "STATE_UNSPECIFIED"
	VolumeRestoreStateEnumCreating         VolumeRestoreStateEnum = "CREATING"
	VolumeRestoreStateEnumRestoring        VolumeRestoreStateEnum = "RESTORING"
	VolumeRestoreStateEnumSucceeded        VolumeRestoreStateEnum = "SUCCEEDED"
	VolumeRestoreStateEnumFailed           VolumeRestoreStateEnum = "FAILED"
	VolumeRestoreStateEnumDeleting         VolumeRestoreStateEnum = "DELETING"
)

type VolumeRestoreVolumeTypeEnum string

const (
	VolumeRestoreVolumeTypeEnumVolumeTypeUnspecified VolumeRestoreVolumeTypeEnum = "VOLUME_TYPE_UNSPECIFIED"
	VolumeRestoreVolumeTypeEnumGcePersistentDisk     VolumeRestoreVolumeTypeEnum = "GCE_PERSISTENT_DISK"
)

type VolumeRestore struct {
	CompleteTime *string                      `json:"completeTime"`
	CreateTime   *string                      `json:"createTime"`
	Etag         *string                      `json:"etag"`
	Name         *string                      `json:"name"`
	State        *VolumeRestoreStateEnum      `json:"state"`
	StateMessage *string                      `json:"stateMessage"`
	TargetPvc    *NamespacedName              `json:"targetPvc"`
	UID          *string                      `json:"uid"`
	UpdateTime   *string                      `json:"updateTime"`
	VolumeBackup *string                      `json:"volumeBackup"`
	VolumeHandle *string                      `json:"volumeHandle"`
	VolumeType   *VolumeRestoreVolumeTypeEnum `json:"volumeType"`
}
