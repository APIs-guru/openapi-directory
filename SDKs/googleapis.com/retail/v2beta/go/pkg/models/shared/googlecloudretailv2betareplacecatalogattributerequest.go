package shared

type GoogleCloudRetailV2betaReplaceCatalogAttributeRequest struct {
	CatalogAttribute *GoogleCloudRetailV2betaCatalogAttribute `json:"catalogAttribute"`
	UpdateMask       *string                                  `json:"updateMask"`
}
