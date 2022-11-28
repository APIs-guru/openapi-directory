package shared

type BackupStateEnum string

const (
	BackupStateEnumStateUnspecified BackupStateEnum = "STATE_UNSPECIFIED"
	BackupStateEnumCreating         BackupStateEnum = "CREATING"
	BackupStateEnumDeleting         BackupStateEnum = "DELETING"
	BackupStateEnumActive           BackupStateEnum = "ACTIVE"
	BackupStateEnumFailed           BackupStateEnum = "FAILED"
	BackupStateEnumRestoring        BackupStateEnum = "RESTORING"
)

// Backup
// The details of a backup resource.
type Backup struct {
	CreateTime        *string          `json:"createTime,omitempty"`
	Description       *string          `json:"description,omitempty"`
	EndTime           *string          `json:"endTime,omitempty"`
	Name              *string          `json:"name,omitempty"`
	RestoringServices []string         `json:"restoringServices,omitempty"`
	ServiceRevision   *Service         `json:"serviceRevision,omitempty"`
	State             *BackupStateEnum `json:"state,omitempty"`
}

// BackupInput
// The details of a backup resource.
type BackupInput struct {
	Description     *string       `json:"description,omitempty"`
	Name            *string       `json:"name,omitempty"`
	ServiceRevision *ServiceInput `json:"serviceRevision,omitempty"`
}
