import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig
/** 
 * Config to process conversation.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigConversationProcessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recentSentencesCount" })
  recentSentencesCount?: number;
}
