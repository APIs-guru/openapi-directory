import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";


// GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig
/** 
 * Defines the Human Agent Assistant to connect to a conversation.
**/
export class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=endUserSuggestionConfig" })
  endUserSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;

  @Metadata({ data: "json, name=humanAgentSuggestionConfig" })
  humanAgentSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;

  @Metadata({ data: "json, name=messageAnalysisConfig" })
  messageAnalysisConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
}
