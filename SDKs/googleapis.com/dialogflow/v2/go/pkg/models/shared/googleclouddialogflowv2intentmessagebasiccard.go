package shared

type GoogleCloudDialogflowV2IntentMessageBasicCard struct {
	Buttons       []GoogleCloudDialogflowV2IntentMessageBasicCardButton `json:"buttons"`
	FormattedText *string                                               `json:"formattedText"`
	Image         *GoogleCloudDialogflowV2IntentMessageImage            `json:"image"`
	Subtitle      *string                                               `json:"subtitle"`
	Title         *string                                               `json:"title"`
}
