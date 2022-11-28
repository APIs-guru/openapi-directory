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

// MetadataExport
// The details of a metadata export operation.
type MetadataExport struct {
	DatabaseDumpType  *MetadataExportDatabaseDumpTypeEnum `json:"databaseDumpType,omitempty"`
	DestinationGcsURI *string                             `json:"destinationGcsUri,omitempty"`
	EndTime           *string                             `json:"endTime,omitempty"`
	StartTime         *string                             `json:"startTime,omitempty"`
	State             *MetadataExportStateEnum            `json:"state,omitempty"`
}
