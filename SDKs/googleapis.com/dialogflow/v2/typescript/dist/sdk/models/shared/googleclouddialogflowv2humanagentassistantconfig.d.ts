import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig } from "./googleclouddialogflowv2humanagentassistantconfigsuggestionconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig } from "./googleclouddialogflowv2humanagentassistantconfigmessageanalysisconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
/**
 * Defines the Human Agent Assist to connect to a conversation.
**/
export declare class GoogleCloudDialogflowV2HumanAgentAssistantConfig extends SpeakeasyBase {
    endUserSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
    humanAgentSuggestionConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigSuggestionConfig;
    messageAnalysisConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfigMessageAnalysisConfig;
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
}
