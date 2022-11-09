import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1ConversationPhoneNumber } from "./googleclouddialogflowv2beta1conversationphonenumber";

export enum GoogleCloudDialogflowV2beta1ConversationConversationStageEnum {
    ConversationStageUnspecified = "CONVERSATION_STAGE_UNSPECIFIED"
,    VirtualAgentStage = "VIRTUAL_AGENT_STAGE"
,    HumanAssistStage = "HUMAN_ASSIST_STAGE"
}

export enum GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
}


// GoogleCloudDialogflowV2beta1Conversation
/** 
 * Represents a conversation. A conversation is an interaction between an agent, including live agents and Dialogflow agents, and a support customer. Conversations can include phone calls and text-based chat sessions.
**/
export class GoogleCloudDialogflowV2beta1Conversation extends SpeakeasyBase {
  @Metadata({ data: "json, name=conversationProfile" })
  conversationProfile?: string;

  @Metadata({ data: "json, name=conversationStage" })
  conversationStage?: GoogleCloudDialogflowV2beta1ConversationConversationStageEnum;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=lifecycleState" })
  lifecycleState?: GoogleCloudDialogflowV2beta1ConversationLifecycleStateEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: GoogleCloudDialogflowV2beta1ConversationPhoneNumber;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
