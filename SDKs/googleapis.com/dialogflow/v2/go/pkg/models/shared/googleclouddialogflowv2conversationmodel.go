package shared

type GoogleCloudDialogflowV2ConversationModelStateEnum string

const (
	GoogleCloudDialogflowV2ConversationModelStateEnumStateUnspecified GoogleCloudDialogflowV2ConversationModelStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2ConversationModelStateEnumCreating         GoogleCloudDialogflowV2ConversationModelStateEnum = "CREATING"
	GoogleCloudDialogflowV2ConversationModelStateEnumUndeployed       GoogleCloudDialogflowV2ConversationModelStateEnum = "UNDEPLOYED"
	GoogleCloudDialogflowV2ConversationModelStateEnumDeploying        GoogleCloudDialogflowV2ConversationModelStateEnum = "DEPLOYING"
	GoogleCloudDialogflowV2ConversationModelStateEnumDeployed         GoogleCloudDialogflowV2ConversationModelStateEnum = "DEPLOYED"
	GoogleCloudDialogflowV2ConversationModelStateEnumUndeploying      GoogleCloudDialogflowV2ConversationModelStateEnum = "UNDEPLOYING"
	GoogleCloudDialogflowV2ConversationModelStateEnumDeleting         GoogleCloudDialogflowV2ConversationModelStateEnum = "DELETING"
	GoogleCloudDialogflowV2ConversationModelStateEnumFailed           GoogleCloudDialogflowV2ConversationModelStateEnum = "FAILED"
	GoogleCloudDialogflowV2ConversationModelStateEnumPending          GoogleCloudDialogflowV2ConversationModelStateEnum = "PENDING"
)

type GoogleCloudDialogflowV2ConversationModel struct {
	ArticleSuggestionModelMetadata *GoogleCloudDialogflowV2ArticleSuggestionModelMetadata `json:"articleSuggestionModelMetadata,omitempty"`
	CreateTime                     *string                                                `json:"createTime,omitempty"`
	Datasets                       []GoogleCloudDialogflowV2InputDataset                  `json:"datasets,omitempty"`
	DisplayName                    *string                                                `json:"displayName,omitempty"`
	LanguageCode                   *string                                                `json:"languageCode,omitempty"`
	Name                           *string                                                `json:"name,omitempty"`
	SmartReplyModelMetadata        *GoogleCloudDialogflowV2SmartReplyModelMetadata        `json:"smartReplyModelMetadata,omitempty"`
	State                          *GoogleCloudDialogflowV2ConversationModelStateEnum     `json:"state,omitempty"`
}
