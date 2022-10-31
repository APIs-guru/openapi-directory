package shared




type VolumeBackupFormatEnum string

const (
    VolumeBackupFormatEnumVolumeBackupFormatUnspecified VolumeBackupFormatEnum = "VOLUME_BACKUP_FORMAT_UNSPECIFIED"
VolumeBackupFormatEnumGcePersistentDisk VolumeBackupFormatEnum = "GCE_PERSISTENT_DISK"
)



type VolumeBackupStateEnum string

const (
    VolumeBackupStateEnumStateUnspecified VolumeBackupStateEnum = "STATE_UNSPECIFIED"
VolumeBackupStateEnumCreating VolumeBackupStateEnum = "CREATING"
VolumeBackupStateEnumSnapshotting VolumeBackupStateEnum = "SNAPSHOTTING"
VolumeBackupStateEnumUploading VolumeBackupStateEnum = "UPLOADING"
VolumeBackupStateEnumSucceeded VolumeBackupStateEnum = "SUCCEEDED"
VolumeBackupStateEnumFailed VolumeBackupStateEnum = "FAILED"
VolumeBackupStateEnumDeleting VolumeBackupStateEnum = "DELETING"
)


type VolumeBackup struct {
    CompleteTime *string `json:"completeTime,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    DiskSizeBytes *string `json:"diskSizeBytes,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Format *VolumeBackupFormatEnum `json:"format,omitempty"`
    Name *string `json:"name,omitempty"`
    SourcePvc *NamespacedName `json:"sourcePvc,omitempty"`
    State *VolumeBackupStateEnum `json:"state,omitempty"`
    StateMessage *string `json:"stateMessage,omitempty"`
    StorageBytes *string `json:"storageBytes,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VolumeBackupHandle *string `json:"volumeBackupHandle,omitempty"`
    
}

