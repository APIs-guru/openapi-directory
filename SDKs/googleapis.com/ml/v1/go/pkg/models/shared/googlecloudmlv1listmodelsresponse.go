package shared

type GoogleCloudMlV1ListModelsResponse struct {
	Models        []GoogleCloudMlV1Model `json:"models"`
	NextPageToken *string                `json:"nextPageToken"`
}
