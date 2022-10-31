package shared




type GoogleCloudDatacatalogV1DataSourceServiceEnum string

const (
    GoogleCloudDatacatalogV1DataSourceServiceEnumServiceUnspecified GoogleCloudDatacatalogV1DataSourceServiceEnum = "SERVICE_UNSPECIFIED"
GoogleCloudDatacatalogV1DataSourceServiceEnumCloudStorage GoogleCloudDatacatalogV1DataSourceServiceEnum = "CLOUD_STORAGE"
GoogleCloudDatacatalogV1DataSourceServiceEnumBigquery GoogleCloudDatacatalogV1DataSourceServiceEnum = "BIGQUERY"
)


type GoogleCloudDatacatalogV1DataSource struct {
    Resource *string `json:"resource,omitempty"`
    Service *GoogleCloudDatacatalogV1DataSourceServiceEnum `json:"service,omitempty"`
    SourceEntry *string `json:"sourceEntry,omitempty"`
    StorageProperties *GoogleCloudDatacatalogV1StorageProperties `json:"storageProperties,omitempty"`
    
}

