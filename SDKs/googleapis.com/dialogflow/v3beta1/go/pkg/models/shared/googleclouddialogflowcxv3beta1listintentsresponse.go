package shared

// GoogleCloudDialogflowCxV3beta1ListIntentsResponse
// The response message for Intents.ListIntents.
type GoogleCloudDialogflowCxV3beta1ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowCxV3beta1Intent `json:"intents,omitempty"`
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
}
