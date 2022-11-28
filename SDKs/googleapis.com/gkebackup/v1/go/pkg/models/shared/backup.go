package shared

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumInProgress       BackupStateEnum = "IN_PROGRESS"
	BackupStateEnumSucceeded        BackupStateEnum = "SUCCEEDED"
	BackupStateEnumFailed           BackupStateEnum = "FAILED"
	BackupStateEnumDeleting         BackupStateEnum = "DELETING"
)

// BackupInput
// Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
type BackupInput struct {
	ClusterMetadata      *ClusterMetadata  `json:"clusterMetadata,omitempty"`
	DeleteLockDays       *int32            `json:"deleteLockDays,omitempty"`
	Description          *string           `json:"description,omitempty"`
	EncryptionKey        *EncryptionKey    `json:"encryptionKey,omitempty"`
	Labels               map[string]string `json:"labels,omitempty"`
	RetainDays           *int32            `json:"retainDays,omitempty"`
	SelectedApplications *NamespacedNames  `json:"selectedApplications,omitempty"`
	SelectedNamespaces   *Namespaces       `json:"selectedNamespaces,omitempty"`
}

// Backup
// Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
type Backup struct {
	AllNamespaces         *bool             `json:"allNamespaces,omitempty"`
	ClusterMetadata       *ClusterMetadata  `json:"clusterMetadata,omitempty"`
	CompleteTime          *string           `json:"completeTime,omitempty"`
	ConfigBackupSizeBytes *string           `json:"configBackupSizeBytes,omitempty"`
	ContainsSecrets       *bool             `json:"containsSecrets,omitempty"`
	ContainsVolumeData    *bool             `json:"containsVolumeData,omitempty"`
	CreateTime            *string           `json:"createTime,omitempty"`
	DeleteLockDays        *int32            `json:"deleteLockDays,omitempty"`
	DeleteLockExpireTime  *string           `json:"deleteLockExpireTime,omitempty"`
	Description           *string           `json:"description,omitempty"`
	EncryptionKey         *EncryptionKey    `json:"encryptionKey,omitempty"`
	Etag                  *string           `json:"etag,omitempty"`
	Labels                map[string]string `json:"labels,omitempty"`
	Manual                *bool             `json:"manual,omitempty"`
	Name                  *string           `json:"name,omitempty"`
	PodCount              *int32            `json:"podCount,omitempty"`
	ResourceCount         *int32            `json:"resourceCount,omitempty"`
	RetainDays            *int32            `json:"retainDays,omitempty"`
	RetainExpireTime      *string           `json:"retainExpireTime,omitempty"`
	SelectedApplications  *NamespacedNames  `json:"selectedApplications,omitempty"`
	SelectedNamespaces    *Namespaces       `json:"selectedNamespaces,omitempty"`
	SizeBytes             *string           `json:"sizeBytes,omitempty"`
	State                 *BackupStateEnum  `json:"state,omitempty"`
	StateReason           *string           `json:"stateReason,omitempty"`
	UID                   *string           `json:"uid,omitempty"`
	UpdateTime            *string           `json:"updateTime,omitempty"`
	VolumeCount           *int32            `json:"volumeCount,omitempty"`
}
