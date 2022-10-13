package shared

type GoogleCloudRetailV2alphaImportUserEventsRequest struct {
	ErrorsConfig *GoogleCloudRetailV2alphaImportErrorsConfig   `json:"errorsConfig"`
	InputConfig  *GoogleCloudRetailV2alphaUserEventInputConfig `json:"inputConfig"`
}
