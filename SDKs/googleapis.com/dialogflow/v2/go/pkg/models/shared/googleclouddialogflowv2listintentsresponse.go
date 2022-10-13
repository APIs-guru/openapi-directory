package shared

type GoogleCloudDialogflowV2ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowV2Intent `json:"intents"`
	NextPageToken *string                         `json:"nextPageToken"`
}
