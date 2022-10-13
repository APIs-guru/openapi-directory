package shared

type GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse struct {
	DeletedCatalogAttributes []string `json:"deletedCatalogAttributes"`
	ResetCatalogAttributes   []string `json:"resetCatalogAttributes"`
}
