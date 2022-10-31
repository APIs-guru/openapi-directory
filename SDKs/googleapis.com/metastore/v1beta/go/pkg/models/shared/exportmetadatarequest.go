package shared




type ExportMetadataRequestDatabaseDumpTypeEnum string

const (
    ExportMetadataRequestDatabaseDumpTypeEnumTypeUnspecified ExportMetadataRequestDatabaseDumpTypeEnum = "TYPE_UNSPECIFIED"
ExportMetadataRequestDatabaseDumpTypeEnumMysql ExportMetadataRequestDatabaseDumpTypeEnum = "MYSQL"
ExportMetadataRequestDatabaseDumpTypeEnumAvro ExportMetadataRequestDatabaseDumpTypeEnum = "AVRO"
)


type ExportMetadataRequest struct {
    DatabaseDumpType *ExportMetadataRequestDatabaseDumpTypeEnum `json:"databaseDumpType,omitempty"`
    DestinationGcsFolder *string `json:"destinationGcsFolder,omitempty"`
    RequestID *string `json:"requestId,omitempty"`
    
}

