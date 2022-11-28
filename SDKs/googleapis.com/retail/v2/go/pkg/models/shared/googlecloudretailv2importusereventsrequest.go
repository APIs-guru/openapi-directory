package shared

// GoogleCloudRetailV2ImportUserEventsRequestInput
// Request message for the ImportUserEvents request.
type GoogleCloudRetailV2ImportUserEventsRequestInput struct {
	ErrorsConfig *GoogleCloudRetailV2ImportErrorsConfig        `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRetailV2UserEventInputConfigInput `json:"inputConfig,omitempty"`
}
