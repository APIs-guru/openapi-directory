package shared

type GoogleCloudRetailV2betaImportUserEventsRequest struct {
	ErrorsConfig *GoogleCloudRetailV2betaImportErrorsConfig   `json:"errorsConfig,omitempty"`
	InputConfig  *GoogleCloudRetailV2betaUserEventInputConfig `json:"inputConfig,omitempty"`
}
