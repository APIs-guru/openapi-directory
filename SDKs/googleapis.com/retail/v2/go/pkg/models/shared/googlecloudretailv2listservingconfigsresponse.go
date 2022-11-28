package shared

// GoogleCloudRetailV2ListServingConfigsResponse
// Response for ListServingConfigs method.
type GoogleCloudRetailV2ListServingConfigsResponse struct {
	NextPageToken  *string                            `json:"nextPageToken,omitempty"`
	ServingConfigs []GoogleCloudRetailV2ServingConfig `json:"servingConfigs,omitempty"`
}
