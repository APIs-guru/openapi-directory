package shared

type GoogleCloudDatacatalogV1DataSourceServiceEnum string

const (
	GoogleCloudDatacatalogV1DataSourceServiceEnumServiceUnspecified GoogleCloudDatacatalogV1DataSourceServiceEnum = "SERVICE_UNSPECIFIED"
	GoogleCloudDatacatalogV1DataSourceServiceEnumCloudStorage       GoogleCloudDatacatalogV1DataSourceServiceEnum = "CLOUD_STORAGE"
	GoogleCloudDatacatalogV1DataSourceServiceEnumBigquery           GoogleCloudDatacatalogV1DataSourceServiceEnum = "BIGQUERY"
)

type GoogleCloudDatacatalogV1DataSource struct {
	Resource          *string                                        `json:"resource"`
	Service           *GoogleCloudDatacatalogV1DataSourceServiceEnum `json:"service"`
	SourceEntry       *string                                        `json:"sourceEntry"`
	StorageProperties *GoogleCloudDatacatalogV1StorageProperties     `json:"storageProperties"`
}
