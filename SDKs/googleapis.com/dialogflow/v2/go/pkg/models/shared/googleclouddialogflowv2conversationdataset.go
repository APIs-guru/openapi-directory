package shared

// GoogleCloudDialogflowV2ConversationDataset
// Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
type GoogleCloudDialogflowV2ConversationDataset struct {
	ConversationCount *string                                  `json:"conversationCount,omitempty"`
	ConversationInfo  *GoogleCloudDialogflowV2ConversationInfo `json:"conversationInfo,omitempty"`
	CreateTime        *string                                  `json:"createTime,omitempty"`
	Description       *string                                  `json:"description,omitempty"`
	DisplayName       *string                                  `json:"displayName,omitempty"`
	InputConfig       *GoogleCloudDialogflowV2InputConfig      `json:"inputConfig,omitempty"`
	Name              *string                                  `json:"name,omitempty"`
}

// GoogleCloudDialogflowV2ConversationDatasetInput
// Represents a conversation dataset that a user imports raw data into. The data inside ConversationDataset can not be changed after ImportConversationData finishes (and calling ImportConversationData on a dataset that already has data is not allowed).
type GoogleCloudDialogflowV2ConversationDatasetInput struct {
	ConversationInfo *GoogleCloudDialogflowV2ConversationInfo `json:"conversationInfo,omitempty"`
	Description      *string                                  `json:"description,omitempty"`
	DisplayName      *string                                  `json:"displayName,omitempty"`
	InputConfig      *GoogleCloudDialogflowV2InputConfig      `json:"inputConfig,omitempty"`
}
