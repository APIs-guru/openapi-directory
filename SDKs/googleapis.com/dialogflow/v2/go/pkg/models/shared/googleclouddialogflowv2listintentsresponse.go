package shared

// GoogleCloudDialogflowV2ListIntentsResponse
// The response message for Intents.ListIntents.
type GoogleCloudDialogflowV2ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowV2Intent `json:"intents,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
