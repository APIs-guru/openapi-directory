package shared

// GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput
// Request for CatalogService.ReplaceCatalogAttribute method.
type GoogleCloudRetailV2betaReplaceCatalogAttributeRequestInput struct {
	CatalogAttribute *GoogleCloudRetailV2betaCatalogAttributeInput `json:"catalogAttribute,omitempty"`
	UpdateMask       *string                                       `json:"updateMask,omitempty"`
}
