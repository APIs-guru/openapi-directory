package shared

// GoogleCloudDialogflowCxV3ListIntentsResponse
// The response message for Intents.ListIntents.
type GoogleCloudDialogflowCxV3ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowCxV3Intent `json:"intents,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
