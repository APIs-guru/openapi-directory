package shared

type GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum string

const (
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumDatabaseTypeUnspecified GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumPostgres                GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "POSTGRES"
	GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnumMysql                   GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum = "MYSQL"
)

// GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec
// Specification for the BigQuery connection to a Cloud SQL instance.
type GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec struct {
	Database   *string                                                         `json:"database,omitempty"`
	InstanceID *string                                                         `json:"instanceId,omitempty"`
	Type       *GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpecTypeEnum `json:"type,omitempty"`
}
