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
	ConversationProfile *string                                                        `json:"conversationProfile,omitempty"`
	ConversationStage   *GoogleCloudDialogflowV2beta1ConversationConversationStageEnum `json:"conversationStage,omitempty"`
	EndTime             *string                                                        `json:"endTime,omitempty"`
	LifecycleState      *GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum    `json:"lifecycleState,omitempty"`
	Name                *string                                                        `json:"name,omitempty"`
	PhoneNumber         *GoogleCloudDialogflowV2beta1ConversationPhoneNumber           `json:"phoneNumber,omitempty"`
	StartTime           *string                                                        `json:"startTime,omitempty"`
}
