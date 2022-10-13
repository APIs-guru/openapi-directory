package shared

type ExportMetadataRequestDatabaseDumpTypeEnum string

const (
	ExportMetadataRequestDatabaseDumpTypeEnumTypeUnspecified ExportMetadataRequestDatabaseDumpTypeEnum = "TYPE_UNSPECIFIED"
	ExportMetadataRequestDatabaseDumpTypeEnumMysql           ExportMetadataRequestDatabaseDumpTypeEnum = "MYSQL"
	ExportMetadataRequestDatabaseDumpTypeEnumAvro            ExportMetadataRequestDatabaseDumpTypeEnum = "AVRO"
)

type ExportMetadataRequest struct {
	DatabaseDumpType     *ExportMetadataRequestDatabaseDumpTypeEnum `json:"databaseDumpType"`
	DestinationGcsFolder *string                                    `json:"destinationGcsFolder"`
	RequestID            *string                                    `json:"requestId"`
}
