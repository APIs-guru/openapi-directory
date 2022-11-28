package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion
// Rich Business Messaging (RBM) suggestion. Suggestions allow user to easily select/click a predefined response or perform an action (like opening a web uri).
type GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestion struct {
	Action *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedAction `json:"action,omitempty"`
	Reply  *GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply  `json:"reply,omitempty"`
}
