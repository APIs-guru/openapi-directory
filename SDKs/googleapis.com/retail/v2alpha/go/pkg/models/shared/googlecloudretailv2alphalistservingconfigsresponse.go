package shared

// GoogleCloudRetailV2alphaListServingConfigsResponse
// Response for ListServingConfigs method.
type GoogleCloudRetailV2alphaListServingConfigsResponse struct {
	NextPageToken  *string                                 `json:"nextPageToken,omitempty"`
	ServingConfigs []GoogleCloudRetailV2alphaServingConfig `json:"servingConfigs,omitempty"`
}
