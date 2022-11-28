import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
/**
 * Defines the Human Agent Assistant to connect to a conversation.
**/
export declare class GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig extends SpeakeasyBase {
    endUserSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;
    humanAgentSuggestionConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigSuggestionConfig;
    messageAnalysisConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfigMessageAnalysisConfig;
    notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
}
