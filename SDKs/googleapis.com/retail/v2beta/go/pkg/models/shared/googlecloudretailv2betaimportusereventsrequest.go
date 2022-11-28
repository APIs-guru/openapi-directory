package shared

// GoogleCloudRetailV2betaImportUserEventsRequestInput
// Request message for the ImportUserEvents request.
type GoogleCloudRetailV2betaImportUserEventsRequestInput struct {
	ErrorsConfig *GoogleCloudRetailV2betaImportErrorsConfig        `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRetailV2betaUserEventInputConfigInput `json:"inputConfig,omitempty"`
}
