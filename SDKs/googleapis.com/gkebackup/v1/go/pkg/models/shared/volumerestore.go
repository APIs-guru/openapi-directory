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

// VolumeRestore
// Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
type VolumeRestore struct {
	CompleteTime *string                      `json:"completeTime,omitempty"`
	CreateTime   *string                      `json:"createTime,omitempty"`
	Etag         *string                      `json:"etag,omitempty"`
	Name         *string                      `json:"name,omitempty"`
	State        *VolumeRestoreStateEnum      `json:"state,omitempty"`
	StateMessage *string                      `json:"stateMessage,omitempty"`
	TargetPvc    *NamespacedName              `json:"targetPvc,omitempty"`
	UID          *string                      `json:"uid,omitempty"`
	UpdateTime   *string                      `json:"updateTime,omitempty"`
	VolumeBackup *string                      `json:"volumeBackup,omitempty"`
	VolumeHandle *string                      `json:"volumeHandle,omitempty"`
	VolumeType   *VolumeRestoreVolumeTypeEnum `json:"volumeType,omitempty"`
}
