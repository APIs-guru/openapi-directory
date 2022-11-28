package shared

type MetadataImportStateEnum string

const (
	MetadataImportStateEnumStateUnspecified MetadataImportStateEnum = "STATE_UNSPECIFIED"
	MetadataImportStateEnumRunning          MetadataImportStateEnum = "RUNNING"
	MetadataImportStateEnumSucceeded        MetadataImportStateEnum = "SUCCEEDED"
	MetadataImportStateEnumUpdating         MetadataImportStateEnum = "UPDATING"
	MetadataImportStateEnumFailed           MetadataImportStateEnum = "FAILED"
)

// MetadataImportInput
// A metastore resource that imports metadata.
type MetadataImportInput struct {
	DatabaseDump *DatabaseDump `json:"databaseDump,omitempty"`
	Description  *string       `json:"description,omitempty"`
	Name         *string       `json:"name,omitempty"`
}

// MetadataImport
// A metastore resource that imports metadata.
type MetadataImport struct {
	CreateTime   *string                  `json:"createTime,omitempty"`
	DatabaseDump *DatabaseDump            `json:"databaseDump,omitempty"`
	Description  *string                  `json:"description,omitempty"`
	EndTime      *string                  `json:"endTime,omitempty"`
	Name         *string                  `json:"name,omitempty"`
	State        *MetadataImportStateEnum `json:"state,omitempty"`
	UpdateTime   *string                  `json:"updateTime,omitempty"`
}
