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
	CreateTime   *string                  `json:"createTime"`
	DatabaseDump *DatabaseDump            `json:"databaseDump"`
	Description  *string                  `json:"description"`
	EndTime      *string                  `json:"endTime"`
	Name         *string                  `json:"name"`
	State        *MetadataImportStateEnum `json:"state"`
	UpdateTime   *string                  `json:"updateTime"`
}
