package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmText
// Rich Business Messaging (RBM) text response with suggestions.
type GoogleCloudDialogflowV2beta1IntentMessageRbmText struct {
	RbmSuggestion []GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion `json:"rbmSuggestion,omitempty"`
	Text          *string                                                  `json:"text,omitempty"`
}
