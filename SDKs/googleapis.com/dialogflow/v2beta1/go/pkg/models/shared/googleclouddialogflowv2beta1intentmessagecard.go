package shared

// GoogleCloudDialogflowV2beta1IntentMessageCard
// The card response message.
type GoogleCloudDialogflowV2beta1IntentMessageCard struct {
	Buttons  []GoogleCloudDialogflowV2beta1IntentMessageCardButton `json:"buttons,omitempty"`
	ImageURI *string                                               `json:"imageUri,omitempty"`
	Subtitle *string                                               `json:"subtitle,omitempty"`
	Title    *string                                               `json:"title,omitempty"`
}
