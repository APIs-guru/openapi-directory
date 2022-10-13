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
	DatabaseType   *DatabaseDumpDatabaseTypeEnum `json:"databaseType"`
	GcsURI         *string                       `json:"gcsUri"`
	SourceDatabase *string                       `json:"sourceDatabase"`
	Type           *DatabaseDumpTypeEnum         `json:"type"`
}
