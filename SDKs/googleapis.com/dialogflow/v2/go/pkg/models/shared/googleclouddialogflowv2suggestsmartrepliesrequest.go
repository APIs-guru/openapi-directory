package shared

// GoogleCloudDialogflowV2SuggestSmartRepliesRequest
// The request message for Participants.SuggestSmartReplies.
type GoogleCloudDialogflowV2SuggestSmartRepliesRequest struct {
	ContextSize      *int32                            `json:"contextSize,omitempty"`
	CurrentTextInput *GoogleCloudDialogflowV2TextInput `json:"currentTextInput,omitempty"`
	LatestMessage    *string                           `json:"latestMessage,omitempty"`
}
