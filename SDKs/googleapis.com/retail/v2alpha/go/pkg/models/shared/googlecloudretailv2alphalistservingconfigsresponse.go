package shared

type GoogleCloudRetailV2alphaListServingConfigsResponse struct {
	NextPageToken  *string                                 `json:"nextPageToken"`
	ServingConfigs []GoogleCloudRetailV2alphaServingConfig `json:"servingConfigs"`
}
