import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";


// GoogleCloudDialogflowV2HumanAgentAssistantConfig
/** 
 * Defines the Human Agent Assist to connect to a conversation.
**/
export class GoogleCloudDialogflowV2HumanAgentAssistantConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=endUserSuggestionConfig" })
  endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;

  @Metadata({ data: "json, name=humanAgentSuggestionConfig" })
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;

  @Metadata({ data: "json, name=messageAnalysisConfig" })
  messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
}
