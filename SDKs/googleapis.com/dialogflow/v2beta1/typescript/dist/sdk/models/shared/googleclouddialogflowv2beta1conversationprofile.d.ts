import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1AutomatedAgentConfig } from "./googleclouddialogflowv2beta1automatedagentconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig } from "./googleclouddialogflowv2beta1humanagentassistantconfig";
import { GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig } from "./googleclouddialogflowv2beta1humanagenthandoffconfig";
import { GoogleCloudDialogflowV2beta1LoggingConfig } from "./googleclouddialogflowv2beta1loggingconfig";
import { GoogleCloudDialogflowV2beta1NotificationConfig } from "./googleclouddialogflowv2beta1notificationconfig";
import { GoogleCloudDialogflowV2beta1SpeechToTextConfig } from "./googleclouddialogflowv2beta1speechtotextconfig";
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export declare class GoogleCloudDialogflowV2beta1ConversationProfile extends SpeakeasyBase {
    automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
    createTime?: string;
    displayName?: string;
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
    languageCode?: string;
    loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;
    name?: string;
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    securitySettings?: string;
    sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;
    timeZone?: string;
    updateTime?: string;
}
/**
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export declare class GoogleCloudDialogflowV2beta1ConversationProfileInput extends SpeakeasyBase {
    automatedAgentConfig?: GoogleCloudDialogflowV2beta1AutomatedAgentConfig;
    displayName?: string;
    humanAgentAssistantConfig?: GoogleCloudDialogflowV2beta1HumanAgentAssistantConfig;
    humanAgentHandoffConfig?: GoogleCloudDialogflowV2beta1HumanAgentHandoffConfig;
    languageCode?: string;
    loggingConfig?: GoogleCloudDialogflowV2beta1LoggingConfig;
    name?: string;
    newMessageEventNotificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    notificationConfig?: GoogleCloudDialogflowV2beta1NotificationConfig;
    securitySettings?: string;
    sttConfig?: GoogleCloudDialogflowV2beta1SpeechToTextConfig;
    timeZone?: string;
}
