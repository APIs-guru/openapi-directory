package shared

// GoogleCloudRetailV2betaListServingConfigsResponse
// Response for ListServingConfigs method.
type GoogleCloudRetailV2betaListServingConfigsResponse struct {
	NextPageToken  *string                                `json:"nextPageToken,omitempty"`
	ServingConfigs []GoogleCloudRetailV2betaServingConfig `json:"servingConfigs,omitempty"`
}
