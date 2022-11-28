package shared

// MetadataIntegration
// Specifies how metastore metadata should be integrated with external services.
type MetadataIntegration struct {
	DataCatalogConfig *DataCatalogConfig `json:"dataCatalogConfig,omitempty"`
	DataplexConfig    *DataplexConfig    `json:"dataplexConfig,omitempty"`
}
