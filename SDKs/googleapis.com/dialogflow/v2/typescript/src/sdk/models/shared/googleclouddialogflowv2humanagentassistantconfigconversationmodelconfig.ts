import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig
/** 
 * Custom conversation models used in agent assist feature. Supported feature: ARTICLE_SUGGESTION, SMART_COMPOSE, SMART_REPLY, CONVERSATION_SUMMARIZATION.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationModelConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;
}
