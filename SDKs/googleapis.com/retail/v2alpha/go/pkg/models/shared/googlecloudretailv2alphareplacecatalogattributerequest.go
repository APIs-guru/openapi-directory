package shared

// GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput
// Request for CatalogService.ReplaceCatalogAttribute method.
type GoogleCloudRetailV2alphaReplaceCatalogAttributeRequestInput struct {
	CatalogAttribute *GoogleCloudRetailV2alphaCatalogAttributeInput `json:"catalogAttribute,omitempty"`
	UpdateMask       *string                                        `json:"updateMask,omitempty"`
}
