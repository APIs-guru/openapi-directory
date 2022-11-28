package shared

// GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply
// Rich Business Messaging (RBM) suggested reply that the user can click instead of typing in their own response.
type GoogleCloudDialogflowV2beta1IntentMessageRbmSuggestedReply struct {
	PostbackData *string `json:"postbackData,omitempty"`
	Text         *string `json:"text,omitempty"`
}
