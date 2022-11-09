import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2AutomatedAgentConfig } from "./googleclouddialogflowv2automatedagentconfig";
import { GoogleCloudDialogflowV2HumanAgentAssistantConfig } from "./googleclouddialogflowv2humanagentassistantconfig";
import { GoogleCloudDialogflowV2HumanAgentHandoffConfig } from "./googleclouddialogflowv2humanagenthandoffconfig";
import { GoogleCloudDialogflowV2LoggingConfig } from "./googleclouddialogflowv2loggingconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2NotificationConfig } from "./googleclouddialogflowv2notificationconfig";
import { GoogleCloudDialogflowV2SpeechToTextConfig } from "./googleclouddialogflowv2speechtotextconfig";


// GoogleCloudDialogflowV2ConversationProfile
/** 
 * Defines the services to connect to incoming Dialogflow conversations.
**/
export class GoogleCloudDialogflowV2ConversationProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatedAgentConfig" })
  automatedAgentConfig?: GoogleCloudDialogflowV2AutomatedAgentConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=humanAgentAssistantConfig" })
  humanAgentAssistantConfig?: GoogleCloudDialogflowV2HumanAgentAssistantConfig;

  @Metadata({ data: "json, name=humanAgentHandoffConfig" })
  humanAgentHandoffConfig?: GoogleCloudDialogflowV2HumanAgentHandoffConfig;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=loggingConfig" })
  loggingConfig?: GoogleCloudDialogflowV2LoggingConfig;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=newMessageEventNotificationConfig" })
  newMessageEventNotificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @Metadata({ data: "json, name=notificationConfig" })
  notificationConfig?: GoogleCloudDialogflowV2NotificationConfig;

  @Metadata({ data: "json, name=securitySettings" })
  securitySettings?: string;

  @Metadata({ data: "json, name=sttConfig" })
  sttConfig?: GoogleCloudDialogflowV2SpeechToTextConfig;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
