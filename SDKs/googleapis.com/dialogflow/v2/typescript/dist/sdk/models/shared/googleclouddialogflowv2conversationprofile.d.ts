import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentConfig } from "./googleclouddialogflowv2automatedagentconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfig } from "./googleclouddialogflowv2humanagentassistantconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfig } from "./googleclouddialogflowv2humanagenthandoffconfig";
import { GoogleCloudDialogflowV2LoggingConfig } from "./googleclouddialogflowv2loggingconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2SpeechToTextConfig } from "./googleclouddialogflowv2speechtotextconfig";
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export declare class GoogleCloudDialogflowV2ConversationProfileInput extends SpeakeasyBase {
    automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
    displayName?: string;
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
    languageCode?: string;
    loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
    name?: string;
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    securitySettings?: string;
    sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
    timeZone?: string;
}
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export declare class GoogleCloudDialogflowV2ConversationProfile extends SpeakeasyBase {
    automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;
    createTime?: string;
    displayName?: string;
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;
    languageCode?: string;
    loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;
    name?: string;
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;
    securitySettings?: string;
    sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;
    timeZone?: string;
    updateTime?: string;
}
