package shared

type MetadataIntegration struct {
	DataCatalogConfig *DataCatalogConfig `json:"dataCatalogConfig"`
	DataplexConfig    *DataplexConfig    `json:"dataplexConfig"`
}
