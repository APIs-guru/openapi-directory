package shared



type GoogleCloudMlV1ListModelsResponse struct {
    Models []GoogleCloudMlV1Model `json:"models,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

