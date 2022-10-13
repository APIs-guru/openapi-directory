package shared

type GoogleCloudRecommendationengineV1beta1ImportCatalogItemsRequest struct {
	ErrorsConfig *GoogleCloudRecommendationengineV1beta1ImportErrorsConfig `json:"errorsConfig"`
	InputConfig  *GoogleCloudRecommendationengineV1beta1InputConfig        `json:"inputConfig"`
	RequestID    *string                                                   `json:"requestId"`
	UpdateMask   *string                                                   `json:"updateMask"`
}
