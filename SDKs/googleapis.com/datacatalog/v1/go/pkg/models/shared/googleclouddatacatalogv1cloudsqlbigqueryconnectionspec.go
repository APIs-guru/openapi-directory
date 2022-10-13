package shared

type GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum string

const (
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumDatabaseTypeUnspecified GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumPostgres                GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "POSTGRES"
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumMysql                   GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "MYSQL"
)

type GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec struct {
	Database   *string                                                         `json:"database"`
	InstanceID *string                                                         `json:"instanceId"`
	Type       *GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum `json:"type"`
}
