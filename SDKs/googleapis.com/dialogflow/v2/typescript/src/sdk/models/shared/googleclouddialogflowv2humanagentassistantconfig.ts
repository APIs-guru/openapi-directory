import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";



// GoogleCloudDialogflowV2HumanAgentAssistantConfig
/** 
 * Defines the Human Agent Assist to connect to a conversation.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endUserSuggestionConfig" })
  endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAgentSuggestionConfig" })
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;

  @SpeakeasyMetadata({ data: "json, name=messageAnalysisConfig" })
  messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
}
