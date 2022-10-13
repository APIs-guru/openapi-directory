package shared

type GoogleCloudRetailV2alphaReplaceCatalogAttributeRequest struct {
	CatalogAttribute *GoogleCloudRetailV2alphaCatalogAttribute `json:"catalogAttribute"`
	UpdateMask       *string                                   `json:"updateMask"`
}
