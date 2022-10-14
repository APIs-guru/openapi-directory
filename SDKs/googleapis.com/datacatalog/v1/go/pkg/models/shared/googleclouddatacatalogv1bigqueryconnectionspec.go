package shared

type GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum string

const (
	GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnumConnectionTypeUnspecified GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum = "CONNECTION_TYPE_UNSPECIFIED"
	GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnumCloudSQL                  GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum = "CLOUD_SQL"
)

type GoogleCloudDatacatalogV1BigQueryConnectionSpec struct {
	CloudSQL       *GoogleCloudDatacatalogV1CloudSQLBigQueryConnectionSpec           `json:"cloudSql,omitempty"`
	ConnectionType *GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum `json:"connectionType,omitempty"`
	HasCredential  *bool                                                             `json:"hasCredential,omitempty"`
}
