import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2ConversationPhoneNumber } from "./googleclouddialogflowv2conversationphonenumber";

export enum GoogleCloudDialogflowV2ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED"
,    VirtualAgentStage = "VIRTUAL_AGENT_STAGE"
,    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}

export enum GoogleCloudDialogflowV2ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
}


// GoogleCloudDialogflowV2Conversation
/** 
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export class GoogleCloudDialogflowV2Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationProfile" })
  conversationProfile?: string;

  @Metadata({ data: "json, name=conversationStage" })
  conversationStage?: GoogleCloudDialogflowV2ConversationConversationStageEnum;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: GoogleCloudDialogflowV2ConversationLifecycleStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: GoogleCloudDialogflowV2ConversationPhoneNumber;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
