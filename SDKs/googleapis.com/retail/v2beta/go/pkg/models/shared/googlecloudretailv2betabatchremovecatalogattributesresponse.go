package shared

// GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse
// Response of the CatalogService.BatchRemoveCatalogAttributes.
type GoogleCloudRetailV2betaBatchRemoveCatalogAttributesResponse struct {
	DeletedCatalogAttributes []string `json:"deletedCatalogAttributes,omitempty"`
	ResetCatalogAttributes   []string `json:"resetCatalogAttributes,omitempty"`
}
