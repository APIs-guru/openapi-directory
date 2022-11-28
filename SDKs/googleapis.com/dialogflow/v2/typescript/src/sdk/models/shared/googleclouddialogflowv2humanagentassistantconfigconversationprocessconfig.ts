import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig
/** 
 * Config to process conversation.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfigConversationProcessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recentSentencesCount" })
  recentSentencesCount?: number;
}
