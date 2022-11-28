package shared

// GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput
// Request for CatalogService.ReplaceCatalogAttribute method.
type GoogleCloudRetailV2ReplaceCatalogAttributeRequestInput struct {
	CatalogAttribute *GoogleCloudRetailV2CatalogAttributeInput `json:"catalogAttribute,omitempty"`
	UpdateMask       *string                                   `json:"updateMask,omitempty"`
}
