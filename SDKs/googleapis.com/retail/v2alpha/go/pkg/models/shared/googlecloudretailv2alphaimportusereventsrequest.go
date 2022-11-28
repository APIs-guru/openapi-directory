package shared

// GoogleCloudRetailV2alphaImportUserEventsRequestInput
// Request message for the ImportUserEvents request.
type GoogleCloudRetailV2alphaImportUserEventsRequestInput struct {
	ErrorsConfig *GoogleCloudRetailV2alphaImportErrorsConfig        `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRetailV2alphaUserEventInputConfigInput `json:"inputConfig,omitempty"`
}
