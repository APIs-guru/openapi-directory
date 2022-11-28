package shared

// ListModelsResponse
// The response for list models
type ListModelsResponse struct {
	Models        []Model `json:"models,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
