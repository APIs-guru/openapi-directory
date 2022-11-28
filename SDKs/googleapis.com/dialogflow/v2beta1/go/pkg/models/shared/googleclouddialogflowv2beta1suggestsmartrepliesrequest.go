package shared

// GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest
// The request message for Participants.SuggestSmartReplies.
type GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest struct {
	ContextSize      *int32                                 `json:"contextSize,omitempty"`
	CurrentTextInput *GoogleCloudDialogflowV2beta1TextInput `json:"currentTextInput,omitempty"`
	LatestMessage    *string                                `json:"latestMessage,omitempty"`
}
