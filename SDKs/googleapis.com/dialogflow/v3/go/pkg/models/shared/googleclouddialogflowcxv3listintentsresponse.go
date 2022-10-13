package shared

type GoogleCloudDialogflowCxV3ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowCxV3Intent `json:"intents"`
	NextPageToken *string                           `json:"nextPageToken"`
}
