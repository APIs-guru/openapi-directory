package shared

type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent struct {
	Description *string                                                          `json:"description"`
	Media       *GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia `json:"media"`
	Suggestions []GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion         `json:"suggestions"`
	Title       *string                                                          `json:"title"`
}
