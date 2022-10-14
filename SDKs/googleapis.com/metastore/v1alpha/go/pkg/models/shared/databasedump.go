package shared

type DatabaseDumpDatabaseTypeEnum string

const (
	DatabaseDumpDatabaseTypeEnumDatabaseTypeUnspecified DatabaseDumpDatabaseTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	DatabaseDumpDatabaseTypeEnumMysql                   DatabaseDumpDatabaseTypeEnum = "MYSQL"
)

type DatabaseDumpTypeEnum string

const (
	DatabaseDumpTypeEnumTypeUnspecified DatabaseDumpTypeEnum = "TYPE_UNSPECIFIED"
	DatabaseDumpTypeEnumMysql           DatabaseDumpTypeEnum = "MYSQL"
	DatabaseDumpTypeEnumAvro            DatabaseDumpTypeEnum = "AVRO"
)

type DatabaseDump struct {
	DatabaseType   *DatabaseDumpDatabaseTypeEnum `json:"databaseType,omitempty"`
	GcsURI         *string                       `json:"gcsUri,omitempty"`
	SourceDatabase *string                       `json:"sourceDatabase,omitempty"`
	Type           *DatabaseDumpTypeEnum         `json:"type,omitempty"`
}
