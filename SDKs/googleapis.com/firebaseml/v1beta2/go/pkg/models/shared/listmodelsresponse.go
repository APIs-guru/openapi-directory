package shared

type ListModelsResponse struct {
	Models        []Model `json:"models,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
