package shared

type GoogleCloudRetailV2ListServingConfigsResponse struct {
	NextPageToken  *string                            `json:"nextPageToken"`
	ServingConfigs []GoogleCloudRetailV2ServingConfig `json:"servingConfigs"`
}
