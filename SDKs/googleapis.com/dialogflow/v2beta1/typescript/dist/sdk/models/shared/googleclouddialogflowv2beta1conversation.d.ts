import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ConversationPhoneNumber } from "./googleclouddialogflowv2beta1conversationphonenumber";
export declare enum GoogleCloudDialogflowV2beta1ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED",
    VirtualAgentStage = "VIRTUAL_AGENT_STAGE",
    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}
export declare enum GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export declare class GoogleCloudDialogflowV2beta1Conversation extends SpeakeasyBase {
    conversationProfile?: string;
    conversationStage?: GoogleCloudDialogflowV2beta1ConversationConversationStageEnum;
    endTime?: string;
    lifecycleState?: GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum;
    name?: string;
    phoneNumber?: GoogleCloudDialogflowV2beta1ConversationPhoneNumber;
    startTime?: string;
}
/**
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export declare class GoogleCloudDialogflowV2beta1ConversationInput extends SpeakeasyBase {
    conversationProfile?: string;
    conversationStage?: GoogleCloudDialogflowV2beta1ConversationConversationStageEnum;
}
