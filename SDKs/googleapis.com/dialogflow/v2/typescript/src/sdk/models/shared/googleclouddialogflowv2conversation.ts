import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ConversationPhoneNumber } from "./googleclouddialogflowv2conversationphonenumber";


export enum GoogleCloudDialogflowV2ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED",
    VirtualAgentStage = "VIRTUAL_AGENT_STAGE",
    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}

export enum GoogleCloudDialogflowV2ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED"
}


// GoogleCloudDialogflowV2ConversationInput
/** 
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export class GoogleCloudDialogflowV2ConversationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationProfile" })
  conversationProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationStage" })
  conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;
}


// GoogleCloudDialogflowV2Conversation
/** 
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export class GoogleCloudDialogflowV2Conversation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conversationProfile" })
  conversationProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=conversationStage" })
  conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lifecycleState" })
  lifecycleState?: GoogleCloudDialogflowV2ConversationLifecycleStateEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
