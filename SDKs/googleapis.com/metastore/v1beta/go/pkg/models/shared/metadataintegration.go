package shared

type MetadataIntegration struct {
	DataCatalogConfig *DataCatalogConfig `json:"dataCatalogConfig,omitempty"`
	DataplexConfig    *DataplexConfig    `json:"dataplexConfig,omitempty"`
}
