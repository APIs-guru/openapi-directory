package shared

// GoogleCloudDatacatalogV1DataSourceConnectionSpec
// Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
type GoogleCloudDatacatalogV1DataSourceConnectionSpec struct {
	BigqueryConnectionSpec *GoogleCloudDatacatalogV1BigQueryConnectionSpec `json:"bigqueryConnectionSpec,omitempty"`
}
