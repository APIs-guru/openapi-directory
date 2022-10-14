package shared

type GoogleCloudRetailV2ReplaceCatalogAttributeRequest struct {
	CatalogAttribute *GoogleCloudRetailV2CatalogAttribute `json:"catalogAttribute,omitempty"`
	UpdateMask       *string                              `json:"updateMask,omitempty"`
}
