package shared

// GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse
// Response of the CatalogService.BatchRemoveCatalogAttributes.
type GoogleCloudRetailV2alphaBatchRemoveCatalogAttributesResponse struct {
	DeletedCatalogAttributes []string `json:"deletedCatalogAttributes,omitempty"`
	ResetCatalogAttributes   []string `json:"resetCatalogAttributes,omitempty"`
}
