package shared

type GoogleCloudDialogflowV2ConversationConversationStageEnum string

const (
	GoogleCloudDialogflowV2ConversationConversationStageEnumConversationStageUnspecified GoogleCloudDialogflowV2ConversationConversationStageEnum = "CONVERSATION_STAGE_UNSPECIFIED"
	GoogleCloudDialogflowV2ConversationConversationStageEnumVirtualAgentStage            GoogleCloudDialogflowV2ConversationConversationStageEnum = "VIRTUAL_AGENT_STAGE"
	GoogleCloudDialogflowV2ConversationConversationStageEnumHumanAssistStage             GoogleCloudDialogflowV2ConversationConversationStageEnum = "HUMAN_ASSIST_STAGE"
)

type GoogleCloudDialogflowV2ConversationLifecycleStateEnum string

const (
	GoogleCloudDialogflowV2ConversationLifecycleStateEnumLifecycleStateUnspecified GoogleCloudDialogflowV2ConversationLifecycleStateEnum = "LIFECYCLE_STATE_UNSPECIFIED"
	GoogleCloudDialogflowV2ConversationLifecycleStateEnumInProgress                GoogleCloudDialogflowV2ConversationLifecycleStateEnum = "IN_PROGRESS"
	GoogleCloudDialogflowV2ConversationLifecycleStateEnumCompleted                 GoogleCloudDialogflowV2ConversationLifecycleStateEnum = "COMPLETED"
)

type GoogleCloudDialogflowV2Conversation struct {
	ConversationProfile *string                                                   `json:"conversationProfile"`
	ConversationStage   *GoogleCloudDialogflowV2ConversationConversationStageEnum `json:"conversationStage"`
	EndTime             *string                                                   `json:"endTime"`
	LifecycleState      *GoogleCloudDialogflowV2ConversationLifecycleStateEnum    `json:"lifecycleState"`
	Name                *string                                                   `json:"name"`
	PhoneNumber         *GoogleCloudDialogflowV2ConversationPhoneNumber           `json:"phoneNumber"`
	StartTime           *string                                                   `json:"startTime"`
}
