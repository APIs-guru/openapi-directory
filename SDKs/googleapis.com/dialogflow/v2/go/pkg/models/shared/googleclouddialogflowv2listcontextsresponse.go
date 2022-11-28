package shared

// GoogleCloudDialogflowV2ListContextsResponse
// The response message for Contexts.ListContexts.
type GoogleCloudDialogflowV2ListContextsResponse struct {
	Contexts      []GoogleCloudDialogflowV2Context `json:"contexts,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
