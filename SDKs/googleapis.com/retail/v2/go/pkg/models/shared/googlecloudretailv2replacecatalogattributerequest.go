package shared

type GoogleCloudRetailV2ReplaceCatalogAttributeRequest struct {
	CatalogAttribute *GoogleCloudRetailV2CatalogAttribute `json:"catalogAttribute"`
	UpdateMask       *string                              `json:"updateMask"`
}
