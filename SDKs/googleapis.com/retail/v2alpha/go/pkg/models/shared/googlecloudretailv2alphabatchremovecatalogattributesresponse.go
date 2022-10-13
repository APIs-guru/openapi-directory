package shared

type GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse struct {
	DeletedCatalogAttributes []string `json:"deletedCatalogAttributes"`
	ResetCatalogAttributes   []string `json:"resetCatalogAttributes"`
}
