package shared

type GoogleCloudDialogflowV2beta1IntentMessageCard struct {
	Buttons  []GoogleCloudDialogflowV2beta1IntentMessageCardButton `json:"buttons"`
	ImageURI *string                                               `json:"imageUri"`
	Subtitle *string                                               `json:"subtitle"`
	Title    *string                                               `json:"title"`
}
