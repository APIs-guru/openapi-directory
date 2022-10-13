package shared

type GoogleCloudDialogflowV2IntentMessageCard struct {
	Buttons  []GoogleCloudDialogflowV2IntentMessageCardButton `json:"buttons"`
	ImageURI *string                                          `json:"imageUri"`
	Subtitle *string                                          `json:"subtitle"`
	Title    *string                                          `json:"title"`
}
