package shared

type GoogleCloudDialogflowCxV3ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowCxV3Intent `json:"intents,omitempty"`
	NextPageToken *string                           `json:"nextPageToken,omitempty"`
}
