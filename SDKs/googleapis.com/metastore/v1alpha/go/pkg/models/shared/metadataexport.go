package shared

type MetadataExportDatabaseDumpTypeEnum string

const (
	MetadataExportDatabaseDumpTypeEnumTypeUnspecified MetadataExportDatabaseDumpTypeEnum = "TYPE_UNSPECIFIED"
	MetadataExportDatabaseDumpTypeEnumMysql           MetadataExportDatabaseDumpTypeEnum = "MYSQL"
	MetadataExportDatabaseDumpTypeEnumAvro            MetadataExportDatabaseDumpTypeEnum = "AVRO"
)

type MetadataExportStateEnum string

const (
	MetadataExportStateEnumStateUnspecified MetadataExportStateEnum = "STATE_UNSPECIFIED"
	MetadataExportStateEnumRunning          MetadataExportStateEnum = "RUNNING"
	MetadataExportStateEnumSucceeded        MetadataExportStateEnum = "SUCCEEDED"
	MetadataExportStateEnumFailed           MetadataExportStateEnum = "FAILED"
	MetadataExportStateEnumCancelled        MetadataExportStateEnum = "CANCELLED"
)

type MetadataExport struct {
	DatabaseDumpType  *MetadataExportDatabaseDumpTypeEnum `json:"databaseDumpType"`
	DestinationGcsURI *string                             `json:"destinationGcsUri"`
	EndTime           *string                             `json:"endTime"`
	StartTime         *string                             `json:"startTime"`
	State             *MetadataExportStateEnum            `json:"state"`
}
