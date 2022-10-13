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
	BackupTypeEnumSchemaExtension BackupTypeEnum = "SCHEMA_EXTENSION"
)

type Backup struct {
	CreateTime    *string           `json:"createTime"`
	Description   *string           `json:"description"`
	Labels        map[string]string `json:"labels"`
	Name          *string           `json:"name"`
	State         *BackupStateEnum  `json:"state"`
	StatusMessage *string           `json:"statusMessage"`
	Type          *BackupTypeEnum   `json:"type"`
	UpdateTime    *string           `json:"updateTime"`
}
