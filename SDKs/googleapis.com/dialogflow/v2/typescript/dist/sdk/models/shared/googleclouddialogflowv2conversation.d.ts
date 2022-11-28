import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationPhoneNumber } from "./googleclouddialogflowv2conversationphonenumber";
export declare enum GoogleCloudDialogflowV2ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED",
    VirtualAgentStage = "VIRTUAL_AGENT_STAGE",
    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}
export declare enum GoogleCloudDialogflowV2ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export declare class GoogleCloudDialogflowV2ConversationInput extends SpeakeasyBase {
    conversationProfile?: string;
    conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export declare class GoogleCloudDialogflowV2Conversation extends SpeakeasyBase {
    conversationProfile?: string;
    conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;
    endTime?: string;
    lifecycleState?: GoogleCloudDialogflowV2ConversationLifecycleStateEnum;
    name?: string;
    phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;
    startTime?: string;
}
