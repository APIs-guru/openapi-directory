package shared

type GoogleCloudDialogflowCxV3beta1ListIntentsResponse struct {
	Intents       []GoogleCloudDialogflowCxV3beta1Intent `json:"intents"`
	NextPageToken *string                                `json:"nextPageToken"`
}
