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

type Backup struct {
	CreateTime        *string          `json:"createTime"`
	Description       *string          `json:"description"`
	EndTime           *string          `json:"endTime"`
	Name              *string          `json:"name"`
	RestoringServices []string         `json:"restoringServices"`
	ServiceRevision   *Service         `json:"serviceRevision"`
	State             *BackupStateEnum `json:"state"`
}
