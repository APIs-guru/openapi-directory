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

// GoogleCloudDialogflowV2Conversation
// Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
type GoogleCloudDialogflowV2Conversation struct {
	ConversationProfile *string                                                   `json:"conversationProfile,omitempty"`
	ConversationStage   *GoogleCloudDialogflowV2ConversationConversationStageEnum `json:"conversationStage,omitempty"`
	EndTime             *string                                                   `json:"endTime,omitempty"`
	LifecycleState      *GoogleCloudDialogflowV2ConversationLifecycleStateEnum    `json:"lifecycleState,omitempty"`
	Name                *string                                                   `json:"name,omitempty"`
	PhoneNumber         *GoogleCloudDialogflowV2ConversationPhoneNumber           `json:"phoneNumber,omitempty"`
	StartTime           *string                                                   `json:"startTime,omitempty"`
}

// GoogleCloudDialogflowV2ConversationInput
// Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
type GoogleCloudDialogflowV2ConversationInput struct {
	ConversationProfile *string                                                   `json:"conversationProfile,omitempty"`
	ConversationStage   *GoogleCloudDialogflowV2ConversationConversationStageEnum `json:"conversationStage,omitempty"`
}
