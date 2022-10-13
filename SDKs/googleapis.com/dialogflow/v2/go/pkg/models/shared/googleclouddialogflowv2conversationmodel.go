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
	ArticleSuggestionModelMetadata *GoogleCloudDialogflowV2ArticleSuggestionModelMetadata `json:"articleSuggestionModelMetadata"`
	CreateTime                     *string                                                `json:"createTime"`
	Datasets                       []GoogleCloudDialogflowV2InputDataset                  `json:"datasets"`
	DisplayName                    *string                                                `json:"displayName"`
	LanguageCode                   *string                                                `json:"languageCode"`
	Name                           *string                                                `json:"name"`
	SmartReplyModelMetadata        *GoogleCloudDialogflowV2SmartReplyModelMetadata        `json:"smartReplyModelMetadata"`
	State                          *GoogleCloudDialogflowV2ConversationModelStateEnum     `json:"state"`
}
