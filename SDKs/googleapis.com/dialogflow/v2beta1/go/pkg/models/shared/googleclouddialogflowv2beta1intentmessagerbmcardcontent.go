package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent
// Rich Business Messaging (RBM) Card content
type GoogleCloudDialogflowV2beta1IntentMessageRbmCardContent struct {
	Description *string                                                          `json:"description,omitempty"`
	Media       *GoogleCloudDialogflowV2beta1IntentMessageRbmCardContentRbmMedia `json:"media,omitempty"`
	Suggestions []GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion         `json:"suggestions,omitempty"`
	Title       *string                                                          `json:"title,omitempty"`
}
