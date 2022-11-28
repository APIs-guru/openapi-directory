package shared

// GoogleCloudDialogflowV2beta1ListIntentsResponse
// The response message for Intents.ListIntents.
type GoogleCloudDialogflowV2beta1ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowV2beta1Intent `json:"intents,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
