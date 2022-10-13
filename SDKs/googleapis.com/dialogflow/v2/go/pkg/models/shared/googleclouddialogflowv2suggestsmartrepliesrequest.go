package shared

type GoogleCloudDialogflowV2SuggestSmartRepliesRequest struct {
	ContextSize      *int32                            `json:"contextSize"`
	CurrentTextInput *GoogleCloudDialogflowV2TextInput `json:"currentTextInput"`
	LatestMessage    *string                           `json:"latestMessage"`
}
