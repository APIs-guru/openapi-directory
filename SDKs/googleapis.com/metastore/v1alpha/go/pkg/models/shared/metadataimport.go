package shared

type MetadataImportStateEnum string

const (
	MetadataImportStateEnumStateUnspecified MetadataImportStateEnum = "STATE_UNSPECIFIED"
	MetadataImportStateEnumRunning          MetadataImportStateEnum = "RUNNING"
	MetadataImportStateEnumSucceeded        MetadataImportStateEnum = "SUCCEEDED"
	MetadataImportStateEnumUpdating         MetadataImportStateEnum = "UPDATING"
	MetadataImportStateEnumFailed           MetadataImportStateEnum = "FAILED"
)

type MetadataImport struct {
	CreateTime   *string                  `json:"createTime,omitempty"`
	DatabaseDump *DatabaseDump            `json:"databaseDump,omitempty"`
	Description  *string                  `json:"description,omitempty"`
	EndTime      *string                  `json:"endTime,omitempty"`
	Name         *string                  `json:"name,omitempty"`
	State        *MetadataImportStateEnum `json:"state,omitempty"`
	UpdateTime   *string                  `json:"updateTime,omitempty"`
}
