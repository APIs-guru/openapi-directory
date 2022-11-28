package shared

// DataCatalogConfig
// Specifies how metastore metadata should be integrated with the Data Catalog service.
type DataCatalogConfig struct {
	Enabled *bool `json:"enabled,omitempty"`
}
