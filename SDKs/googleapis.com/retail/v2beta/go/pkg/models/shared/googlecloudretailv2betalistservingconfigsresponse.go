package shared

type GoogleCloudRetailV2betaListServingConfigsResponse struct {
	NextPageToken  *string                                `json:"nextPageToken"`
	ServingConfigs []GoogleCloudRetailV2betaServingConfig `json:"servingConfigs"`
}
