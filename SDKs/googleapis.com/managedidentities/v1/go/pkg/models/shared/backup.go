package shared

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumActive           BackupStateEnum = "ACTIVE"
	BackupStateEnumFailed           BackupStateEnum = "FAILED"
	BackupStateEnumDeleting         BackupStateEnum = "DELETING"
)

type BackupTypeEnum string

const (
	BackupTypeEnumTypeUnspecified BackupTypeEnum = "TYPE_UNSPECIFIED"
	BackupTypeEnumOnDemand        BackupTypeEnum = "ON_DEMAND"
	BackupTypeEnumScheduled       BackupTypeEnum = "SCHEDULED"
)

// BackupInput
// Represents a Managed Microsoft Identities backup.
type BackupInput struct {
	Labels map[string]string `json:"labels,omitempty"`
}

// Backup
// Represents a Managed Microsoft Identities backup.
type Backup struct {
	CreateTime    *string           `json:"createTime,omitempty"`
	Labels        map[string]string `json:"labels,omitempty"`
	Name          *string           `json:"name,omitempty"`
	State         *BackupStateEnum  `json:"state,omitempty"`
	StatusMessage *string           `json:"statusMessage,omitempty"`
	Type          *BackupTypeEnum   `json:"type,omitempty"`
	UpdateTime    *string           `json:"updateTime,omitempty"`
}
