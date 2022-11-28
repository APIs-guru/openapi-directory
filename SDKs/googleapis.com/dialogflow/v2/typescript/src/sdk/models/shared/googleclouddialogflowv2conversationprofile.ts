import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2AutomatedAgentConfig } from "./googleclouddialogflowv2automatedagentconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfig } from "./googleclouddialogflowv2humanagentassistantconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfig } from "./googleclouddialogflowv2humanagenthandoffconfig";
import { GoogleCloudDialogflowV2LoggingConfig } from "./googleclouddialogflowv2loggingconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2SpeechToTextConfig } from "./googleclouddialogflowv2speechtotextconfig";



// GoogleCloudDialogflowV2ConversationProfileInput
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2ConversationProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @SpeakeasyMetadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;
}


// GoogleCloudDialogflowV2ConversationProfile
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2ConversationProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;

  @SpeakeasyMetadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @SpeakeasyMetadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @SpeakeasyMetadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
