package shared

type GoogleCloudDialogflowV2ConversationDataset struct {
	ConversationCount *string                                  `json:"conversationCount,omitempty"`
	ConversationInfo  *GoogleCloudDialogflowV2ConversationInfo `json:"conversationInfo,omitempty"`
	CreateTime        *string                                  `json:"createTime,omitempty"`
	Description       *string                                  `json:"description,omitempty"`
	DisplayName       *string                                  `json:"displayName,omitempty"`
	InputConfig       *GoogleCloudDialogflowV2InputConfig      `json:"inputConfig,omitempty"`
	Name              *string                                  `json:"name,omitempty"`
}
