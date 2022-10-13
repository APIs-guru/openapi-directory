package shared

type VolumeBackupFormatEnum string

const (
	VolumeBackupFormatEnumVolumeBackupFormatUnspecified VolumeBackupFormatEnum = "VOLUME_BACKUP_FORMAT_UNSPECIFIED"
	VolumeBackupFormatEnumGcePersistentDisk             VolumeBackupFormatEnum = "GCE_PERSISTENT_DISK"
)

type VolumeBackupStateEnum string

const (
	VolumeBackupStateEnumStateUnspecified VolumeBackupStateEnum = "STATE_UNSPECIFIED"
	VolumeBackupStateEnumCreating         VolumeBackupStateEnum = "CREATING"
	VolumeBackupStateEnumSnapshotting     VolumeBackupStateEnum = "SNAPSHOTTING"
	VolumeBackupStateEnumUploading        VolumeBackupStateEnum = "UPLOADING"
	VolumeBackupStateEnumSucceeded        VolumeBackupStateEnum = "SUCCEEDED"
	VolumeBackupStateEnumFailed           VolumeBackupStateEnum = "FAILED"
	VolumeBackupStateEnumDeleting         VolumeBackupStateEnum = "DELETING"
)

type VolumeBackup struct {
	CompleteTime       *string                 `json:"completeTime"`
	CreateTime         *string                 `json:"createTime"`
	DiskSizeBytes      *string                 `json:"diskSizeBytes"`
	Etag               *string                 `json:"etag"`
	Format             *VolumeBackupFormatEnum `json:"format"`
	Name               *string                 `json:"name"`
	SourcePvc          *NamespacedName         `json:"sourcePvc"`
	State              *VolumeBackupStateEnum  `json:"state"`
	StateMessage       *string                 `json:"stateMessage"`
	StorageBytes       *string                 `json:"storageBytes"`
	UID                *string                 `json:"uid"`
	UpdateTime         *string                 `json:"updateTime"`
	VolumeBackupHandle *string                 `json:"volumeBackupHandle"`
}
