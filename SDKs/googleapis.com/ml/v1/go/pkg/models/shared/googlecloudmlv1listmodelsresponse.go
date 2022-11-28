package shared

// GoogleCloudMlV1ListModelsResponse
// Response message for the ListModels method.
type GoogleCloudMlV1ListModelsResponse struct {
	Models        []GoogleCloudMlV1Model `json:"models,omitempty"`
	NextPageToken *string                `json:"nextPageToken,omitempty"`
}
