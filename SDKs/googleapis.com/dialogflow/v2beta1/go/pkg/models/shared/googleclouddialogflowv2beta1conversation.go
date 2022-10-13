package shared

type GoogleCloudDialogflowV2beta1ConversationConversationStageEnum string

const (
	GoogleCloudDialogflowV2beta1ConversationConversationStageEnumConversationStageUnspecified GoogleCloudDialogflowV2beta1ConversationConversationStageEnum = "CONVERSATION_STAGE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1ConversationConversationStageEnumVirtualAgentStage            GoogleCloudDialogflowV2beta1ConversationConversationStageEnum = "VIRTUAL_AGENT_STAGE"
	GoogleCloudDialogflowV2beta1ConversationConversationStageEnumHumanAssistStage             GoogleCloudDialogflowV2beta1ConversationConversationStageEnum = "HUMAN_ASSIST_STAGE"
)

type GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum string

const (
	GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnumLifecycleStateUnspecified GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnumInProgress                GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnumCompleted                 GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum = "COMPLETED"
)

type GoogleCloudDialogflowV2beta1Conversation struct {
	ConversationProfile *string                                                        `json:"conversationProfile"`
	ConversationStage   *GoogleCloudDialogflowV2beta1ConversationConversationStageEnum `json:"conversationStage"`
	EndTime             *string                                                        `json:"endTime"`
	LifecycleState      *GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum    `json:"lifecycleState"`
	Name                *string                                                        `json:"name"`
	PhoneNumber         *GoogleCloudDialogflowV2beta1ConversationPhoneNumber           `json:"phoneNumber"`
	StartTime           *string                                                        `json:"startTime"`
}
