package shared

// GoogleCloudDialogflowV2beta1ListContextsResponse
// The response message for Contexts.ListContexts.
type GoogleCloudDialogflowV2beta1ListContextsResponse struct {
	Contexts      []GoogleCloudDialogflowV2beta1Context `json:"contexts,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
