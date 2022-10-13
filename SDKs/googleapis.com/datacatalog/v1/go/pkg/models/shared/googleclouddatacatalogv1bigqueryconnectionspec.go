package shared

type GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum string

const (
	GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnumConnectionTypeUnspecified GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum = "CONNECTION_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnumCloudSQL                  GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum = "CLOUD_SQL"
)

type GoogleCloudDatacatalogV1BigQueryConnectionSpec struct {
	CloudSQL       *GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec           `json:"cloudSql"`
	ConnectionType *GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum `json:"connectionType"`
	HasCredential  *bool                                                             `json:"hasCredential"`
}
