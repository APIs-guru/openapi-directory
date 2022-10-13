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

type Backup struct {
	AllNamespaces         *bool             `json:"allNamespaces"`
	ClusterMetadata       *ClusterMetadata  `json:"clusterMetadata"`
	CompleteTime          *string           `json:"completeTime"`
	ConfigBackupSizeBytes *string           `json:"configBackupSizeBytes"`
	ContainsSecrets       *bool             `json:"containsSecrets"`
	ContainsVolumeData    *bool             `json:"containsVolumeData"`
	CreateTime            *string           `json:"createTime"`
	DeleteLockDays        *int32            `json:"deleteLockDays"`
	DeleteLockExpireTime  *string           `json:"deleteLockExpireTime"`
	Description           *string           `json:"description"`
	EncryptionKey         *EncryptionKey    `json:"encryptionKey"`
	Etag                  *string           `json:"etag"`
	Labels                map[string]string `json:"labels"`
	Manual                *bool             `json:"manual"`
	Name                  *string           `json:"name"`
	PodCount              *int32            `json:"podCount"`
	ResourceCount         *int32            `json:"resourceCount"`
	RetainDays            *int32            `json:"retainDays"`
	RetainExpireTime      *string           `json:"retainExpireTime"`
	SelectedApplications  *NamespacedNames  `json:"selectedApplications"`
	SelectedNamespaces    *Namespaces       `json:"selectedNamespaces"`
	SizeBytes             *string           `json:"sizeBytes"`
	State                 *BackupStateEnum  `json:"state"`
	StateReason           *string           `json:"stateReason"`
	UID                   *string           `json:"uid"`
	UpdateTime            *string           `json:"updateTime"`
	VolumeCount           *int32            `json:"volumeCount"`
}
