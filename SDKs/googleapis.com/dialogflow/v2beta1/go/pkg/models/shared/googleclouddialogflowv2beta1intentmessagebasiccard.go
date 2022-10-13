package shared

type GoogleCloudDialogflowV2beta1IntentMessageBasicCard struct {
	Buttons       []GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton `json:"buttons"`
	FormattedText *string                                                    `json:"formattedText"`
	Image         *GoogleCloudDialogflowV2beta1IntentMessageImage            `json:"image"`
	Subtitle      *string                                                    `json:"subtitle"`
	Title         *string                                                    `json:"title"`
}
