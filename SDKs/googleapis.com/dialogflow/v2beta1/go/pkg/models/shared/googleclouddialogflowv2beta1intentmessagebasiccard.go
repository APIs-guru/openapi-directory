package shared

// GoogleCloudDialogflowV2beta1IntentMessageBasicCard
// The basic card message. Useful for displaying information.
type GoogleCloudDialogflowV2beta1IntentMessageBasicCard struct {
	Buttons       []GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton `json:"buttons,omitempty"`
	FormattedText *string                                                    `json:"formattedText,omitempty"`
	Image         *GoogleCloudDialogflowV2beta1IntentMessageImage            `json:"image,omitempty"`
	Subtitle      *string                                                    `json:"subtitle,omitempty"`
	Title         *string                                                    `json:"title,omitempty"`
}
