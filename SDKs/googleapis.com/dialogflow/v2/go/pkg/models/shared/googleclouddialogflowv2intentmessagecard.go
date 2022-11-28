package shared

// GoogleCloudDialogflowV2IntentMessageCard
// The card response message.
type GoogleCloudDialogflowV2IntentMessageCard struct {
	Buttons  []GoogleCloudDialogflowV2IntentMessageCardButton `json:"buttons,omitempty"`
	ImageURI *string                                          `json:"imageUri,omitempty"`
	Subtitle *string                                          `json:"subtitle,omitempty"`
	Title    *string                                          `json:"title,omitempty"`
}
