package shared

type GoogleCloudRetailV2ImportUserEventsRequest struct {
	ErrorsConfig *GoogleCloudRetailV2ImportErrorsConfig   `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRetailV2UserEventInputConfig `json:"inputConfig,omitempty"`
}
