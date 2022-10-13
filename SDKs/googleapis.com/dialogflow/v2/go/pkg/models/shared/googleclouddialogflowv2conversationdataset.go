package shared

type GoogleCloudDialogflowV2ConversationDataset struct {
	ConversationCount *string                                  `json:"conversationCount"`
	ConversationInfo  *GoogleCloudDialogflowV2ConversationInfo `json:"conversationInfo"`
	CreateTime        *string                                  `json:"createTime"`
	Description       *string                                  `json:"description"`
	DisplayName       *string                                  `json:"displayName"`
	InputConfig       *GoogleCloudDialogflowV2InputConfig      `json:"inputConfig"`
	Name              *string                                  `json:"name"`
}
