package shared

type GoogleCloudDialogflowV2beta1SuggestSmartRepliesRequest struct {
	ContextSize      *int32                                 `json:"contextSize"`
	CurrentTextInput *GoogleCloudDialogflowV2beta1TextInput `json:"currentTextInput"`
	LatestMessage    *string                                `json:"latestMessage"`
}
