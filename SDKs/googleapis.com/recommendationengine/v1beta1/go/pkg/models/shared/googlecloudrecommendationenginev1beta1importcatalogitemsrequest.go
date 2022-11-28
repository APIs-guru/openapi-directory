package shared

// GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest
// Request message for Import methods.
type GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest struct {
	ErrorsConfig *GoogleCloudRecommendationengineV1beta1ImportErrorsConfig `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRecommendationengineV1beta1InputConfig        `json:"inputConfig,omitempty"`
	RequestID    *string                                                   `json:"requestId,omitempty"`
	UpdateMask   *string                                                   `json:"updateMask,omitempty"`
}
