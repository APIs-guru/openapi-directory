package shared

type GoogleCloudDialogflowV2beta1ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowV2beta1Intent `json:"intents"`
	NextPageToken *string                              `json:"nextPageToken"`
}
